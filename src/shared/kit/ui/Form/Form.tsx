import { yupResolver } from '@hookform/resolvers/yup'
import { type PropsWithChildren, type ReactNode } from 'react'
import {
  useForm,
  type FieldValues,
  type UseFormRegister,
  type UseFormSetValue,
} from 'react-hook-form'
import { type IGap } from 'shared/kit/lib/types'
import { createClassNames } from 'shared/lib/helpers/moduleClassNames'
import { type ObjectSchema } from 'yup'
import Button from '../Button/Button'
import s from './Form.module.scss'

export interface FormStyles extends IGap {}

interface FormProps<S> extends PropsWithChildren {
  styles: FormStyles
  returnInput: (
    props: {
      register: UseFormRegister<FieldValues>
      setValue: UseFormSetValue<Record<string, any>>
    },
    extra: { field: any }
  ) => ReactNode
  schema: S
  initialData?: Record<string, any>
  onSubmit: (data: FieldValues) => void
}

const mcn = createClassNames(s)

const Form = <S extends ObjectSchema<any>>({
  returnInput,
  schema,
  styles,
  onSubmit,
  children,
  initialData,
}: FormProps<S>) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: initialData,
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={mcn(styles)}>
      {Object.values(errors).map((err, i) => (
        <Button key={i}>{err!.message}</Button>
      ))}
      {Object.keys(schema.fields).map((field) =>
        returnInput({ register, setValue }, { field })
      )}
      {children}
    </form>
  )
}

export default Form
