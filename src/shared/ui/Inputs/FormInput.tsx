/* eslint-disable react/display-name */
import TextError from '@/shared/kit/ui/TextError/TextError'
import Input, { type InputProps } from '@/shared/kit/ui/inputs/Input/Input'
import { forwardRef, type ForwardedRef } from 'react'
import s from './FormInput.module.scss'

interface FormInputProps extends InputProps {
  errorMessage?: string
}

const FormInput = forwardRef(
  (
    { children, placeholder, errorMessage, ...props }: FormInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <Input {...props} placeholder=" " ref={ref} className={s.main}>
        <span className={s.placeholder}>{placeholder}</span>
        {errorMessage && (
          <TextError message={errorMessage} />
        )}
        {children}
      </Input>
    )
  }
)

export default FormInput
