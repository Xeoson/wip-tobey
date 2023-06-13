import { forwardRef, type ForwardedRef } from 'react'
import { type IMargin } from 'shared/kit/lib/types'
import { createClassNames } from 'shared/lib/helpers/moduleClassNames'
import { type DP } from 'shared/lib/types'
import s from './Input.module.scss'

export interface InputStyles extends IMargin {}

interface InputProps extends Omit<DP<HTMLInputElement>, 'type'> {
  styles: InputStyles
}

const mcn = createClassNames(s)

const Input = forwardRef(
  (
    { styles, children, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <label className={mcn(styles)}>
        <input type="text" {...props} ref={ref} />
        {children}
      </label>
    )
  }
)

export default Input
