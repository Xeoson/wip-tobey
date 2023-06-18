import { forwardRef, type ForwardedRef } from 'react'
import { type IMargin } from 'shared/kit/lib/types'
import { createClassNames } from 'shared/lib/helpers/moduleClassNames'
import { type DPInput } from 'shared/lib/types'
import s from './Input.module.scss'

export interface InputStyles extends IMargin {}

export interface InputProps extends Omit<DPInput, 'type'> {
  styles?: InputStyles
}

const mcn = createClassNames(s)

const Input = forwardRef(
  (
    { styles, children, className, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <label className={mcn(styles, className)}>
        <input type="text" {...props} ref={ref} />
        {children}
      </label>
    )
  }
)

export default Input
