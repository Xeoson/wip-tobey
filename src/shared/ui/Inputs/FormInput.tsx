/* eslint-disable react/display-name */
import { forwardRef, type ForwardedRef } from 'react'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import Input, { type InputProps } from 'shared/kit/ui/inputs/Input/Input'
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
          <span className={s.error}>
            <AiOutlineInfoCircle />
            {errorMessage}
          </span>
        )}
        {children}
      </Input>
    )
  }
)

export default FormInput
