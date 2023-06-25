import { type IMargin } from '@/shared/kit/lib/types'
import { createClassNames } from '@/shared/lib/helpers/moduleClassNames'
import {
  forwardRef,
  type DetailedHTMLProps,
  type ForwardedRef,
  type TextareaHTMLAttributes,
} from 'react'
import s from './Textarea.module.scss'

export interface TextareaStyles extends IMargin {}

export interface TextareaProps
  extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  styles?: TextareaStyles
}

const mcn = createClassNames(s)

const Textarea = forwardRef(
  ({ styles, children, className, ...props }: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>) => {
    return (
      <label className={s.label}>
        <textarea rows={4} {...props} className={mcn(styles, className)} ref={ref}>
          {children}
        </textarea>
      </label>
    )
  }
)

export default Textarea
