import { yupResolver } from '@hookform/resolvers/yup'
import {
  getFormError,
  getFormType,
  getIsLoading,
} from 'features/login/model/selectors'
import { LoginActions, LoginReducer } from 'features/login/model/slice'
import { signIn, signUp } from 'features/login/model/thunks'
import { useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import withReducerLoader from 'shared/lib/components/withReducerLoader'
import Button from 'shared/ui/Buttons/Button'
import FormInput from 'shared/ui/Inputs/FormInput'
import { object, string } from 'yup'
import s from './LoginForm.module.scss'

const yupSchema = object<ILoginFields>({
  name: string().max(12, 'Max 12 chars'),
  email: string()
    .matches(/^\S+@\S+\.\S+$/g, 'Invalid format')
    .max(20, 'Max 20 chars'),
  password: string().min(6, 'Al least 6 chars').max(20, 'Max 20 chars'),
})

export interface ILoginFields {
  name?: string
  email: string
  password: string
}

interface LoginFormProps {}

const LoginForm = (props: LoginFormProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ILoginFields>({
    resolver: yupResolver(yupSchema),
  })

  const formRef = useRef<HTMLFormElement | null>(null)
  const isLoading = useSelector(getIsLoading)
  const formType = useSelector(getFormType)
  const formError = useSelector(getFormError)
  const dispatch = useDispatch<any>()

  useEffect(() => {
    formRef.current?.querySelector('input')?.focus()
  }, [formType, isLoading])

  const onSubmit = (data: ILoginFields) => {
    if (formType === 'signUp') {
      dispatch(signUp(data))
    } else if (formType === 'signIn') {
      dispatch(signIn(data))
    }
  }

  const handleToggleFormType = () => {
    dispatch(
      LoginActions.set({
        formError: '',
        formType: formType === 'signIn' ? 'signUp' : 'signIn',
      })
    )
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className={s.main}>
      <h1>Welcome!</h1>
      {formType === 'signUp' && (
        <FormInput
          disabled={isLoading}
          errorMessage={errors.name?.message}
          placeholder="Name"
          {...register('name')}
        />
      )}
      <FormInput
        disabled={isLoading}
        errorMessage={errors.email?.message}
        placeholder="Email*"
        {...register('email')}
      />
      <FormInput
        disabled={isLoading}
        errorMessage={errors.password?.message}
        placeholder="Password*"
        {...register('password')}
      />
      {formError && <h3 className={s.error}>{formError}</h3>}
      <Button disabled={isLoading} type="submit" theme="secondary" size="lg">
        {formType === 'signIn' ? 'SignIn' : 'SignUp'}
      </Button>
      <div className={s.loginToggler}>
        {formType === 'signIn' ? (
          <button onClick={handleToggleFormType}>Create account</button>
        ) : (
          <>
            <span>Already have an account?</span>
            <button onClick={handleToggleFormType}>Sing In</button>
          </>
        )}
      </div>
    </form>
  )
}

export default withReducerLoader({
  Component: LoginForm,
  reducers: { login: LoginReducer },
  // removeOnUnmount: true
})
