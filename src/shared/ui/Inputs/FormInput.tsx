/* eslint-disable react/display-name */
import { forwardRef, type ForwardedRef } from 'react'
import { type DPInput } from 'shared/lib/types'
import s from './FormInput.module.scss'
import Input from './Input'
import { AiOutlineInfoCircle } from 'react-icons/ai'

interface FormInputProps extends DPInput {
  errorMessage?: string
}

const FormInput = forwardRef(
  (
    { children, placeholder, errorMessage, ...props }: FormInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <Input {...props} ref={ref} labelClassName={s.main} className={s.input}>
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
