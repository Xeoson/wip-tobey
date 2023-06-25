import { type IFontSize, type IMargin } from '@/shared/kit/lib/types'
import { createClassNames } from '@/shared/lib/helpers/moduleClassNames'
import { type DP } from '@/shared/lib/types'
import s from './Text.module.scss'

export interface TextStyles extends IFontSize, IMargin {
  theme?: 'error'
}

interface TextProps extends DP<HTMLParagraphElement> {
  as?: 'p' | 'h1' | 'h2'
  styles?: TextStyles
}

const mcn = createClassNames(s)

const Text = ({ children, styles, as, ...props }: TextProps) => {
  switch (as) {
    case 'h1':
      return (
        <h1 {...props} className={mcn(styles)}>
          {children}
        </h1>
      )
    case 'h2':
      return (
        <h2 {...props} className={mcn(styles)}>
          {children}
        </h2>
      )
    default:
      return (
        <p {...props} className={mcn(styles)}>
          {children}
        </p>
      )
  }
}

export default Text
