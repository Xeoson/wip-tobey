import { forwardRef, type ForwardedRef } from 'react'
import cn from 'shared/lib/helpers/classNames'
import { type DPInput } from '../../../shared/lib/types'
import './Input.module.scss'

export interface InputProps extends DPInput {
  labelClassName?: string
}

// eslint-disable-next-line react/display-name
const Input = forwardRef(
  (
    { children, labelClassName, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <label className={cn(labelClassName)}>
        <input type="text" {...props} ref={ref} />
        {children}
      </label>
    )
  }
)

export default Input
