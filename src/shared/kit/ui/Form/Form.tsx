import { yupResolver } from '@hookform/resolvers/yup'
import { memo, useEffect, type PropsWithChildren, type ReactNode } from 'react'
import {
  useForm,
  type FieldValues,
  type UseFormRegister,
} from 'react-hook-form'
import { type IGap } from 'shared/kit/lib/types'
import { createClassNames } from 'shared/lib/helpers/moduleClassNames'
import { type ObjectSchema } from 'yup'
import s from './Form.module.scss'

interface InputProps {
  field: string
  register: UseFormRegister<FieldValues>
}

export interface FormStyles extends IGap {}

interface FormProps<S> extends PropsWithChildren {
  styles: FormStyles
  returnInput: (props: InputProps) => ReactNode
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
  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
    defaultValues: initialData,
  })

  useEffect(() => {
    reset()
  }, [schema])

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={mcn(styles)}>
      {Object.keys(schema.fields).map((field) =>
        returnInput({ field, register })
      )}
      {children}
    </form>
  )
}

export default memo(Form)
