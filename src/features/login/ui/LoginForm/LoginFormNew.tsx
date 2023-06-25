import { useAppDispatch } from '@/app/model/redux'
import Button, { type ButtonStyles } from '@/shared/kit/ui/Button/Button'
import Flex from '@/shared/kit/ui/Flex/Flex'
import Form, { type FormStyles } from '@/shared/kit/ui/Form/Form'
import Text, { type TextStyles } from '@/shared/kit/ui/Text/Text'
import withReducerLoader from '@/shared/lib/components/withReducerLoader'
import capitalize from '@/shared/lib/helpers/capitalize'
import FormInput from '@/shared/ui/Inputs/FormInput'
import { object, string } from 'yup'
import { useFormError, useFormType, useIsLoading } from '../../model/selectors'
import { LoginReducer, useLoginActions } from '../../model/slice'
import { signIn, signUp } from '../../model/thunks'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

const signinButtonStyles: ButtonStyles = {
  theme: 'secondary',
  size: 'lg',
  justify: 'center',
  mx: 'auto',
}
const errorTextStyles: TextStyles = {
  theme: 'error',
}
const welcomeStyles: TextStyles = {
	mx: 'auto'
}
const signBtn: ButtonStyles = {
	color: 'secondary'
}

const yupSchema = object<ILoginFields>({
  name: string().max(12, 'Max 12 chars'),
  email: string()
    .matches(/^\w+@\w+\.\w+$/g, 'Invalid format')
    .max(20, 'Max 20 chars'),
  password: string().min(6, 'Al least 6 chars').max(20, 'Max 20 chars'),
})

export interface ILoginFields {
  name?: string
  email: string
  password: string
}

interface LoginFormNewProps {}

const LoginFormNew = (props: LoginFormNewProps) => {
  const isLoading = useIsLoading()
  const formType = useFormType()
  const formError = useFormError()

	const { set: setLogin } = useLoginActions()
	const dispatch = useAppDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFields>({
    resolver: yupResolver(yupSchema),
  })

  const cb = {
    onSubmit: (data: ILoginFields) => {
      if (formType === 'signUp') {
        dispatch(signUp(data))
      } else if (formType === 'signIn') {
        dispatch(signIn(data))
      }
    },
    onToggleFormType: () => {
      setLogin({ formType: formType === 'signIn' ? 'signUp' : 'signIn' })
    },
  }

  return (
    <form onSubmit={handleSubmit(cb.onSubmit)}>
      <Flex direction="column" gap="md">
        <Text styles={welcomeStyles} as="h1">
          Welcome!
        </Text>
        {formType === 'signUp' && (
          <FormInput
            disabled={isLoading}
            errorMessage={errors.name?.message}
            placeholder={'Name'}
            {...register('name')}
          />
        )}
        <FormInput
          disabled={isLoading}
          errorMessage={errors.email?.message}
          placeholder={'Email*'}
          {...register('email')}
        />
        <FormInput
          disabled={isLoading}
          errorMessage={errors.password?.message}
          placeholder={'Password*'}
          {...register('password')}
        />
        {formError && <Text styles={errorTextStyles}>{formError}</Text>}
        <Button type="submit" styles={signinButtonStyles}>
          {formType === 'signIn' ? 'SignIn' : 'SignUp'}
        </Button>
        <Flex mx="auto" gap="sm">
          {formType === 'signIn' ? (
            <Button styles={signBtn} onClick={cb.onToggleFormType}>Create an account</Button>
          ) : (
            <>
              <span>Already have an account?</span>
              <Button styles={signBtn} onClick={cb.onToggleFormType}>
                Sing In
              </Button>
            </>
          )}
        </Flex>
      </Flex>
    </form>
  )
}

export default withReducerLoader({
  Component: LoginFormNew,
  reducers: { login: LoginReducer },
  // removeOnUnmount: true
})
