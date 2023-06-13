import { Link, type LinkProps } from 'react-router-dom'
import {
  type IAlign,
  type IGap,
  type IJustify,
  type IMargin,
  type IPadding,
  type IWidth,
} from 'shared/kit/lib/types'
import { type ThemeValues } from 'shared/kit/lib/types/const'
import { createClassNames } from 'shared/lib/helpers/moduleClassNames'
import { type DP } from 'shared/lib/types'
import s from './Button.module.scss'

export type ButtonPropsType =
  | ({ type?: 'button' } & Omit<DP<HTMLButtonElement>, 'className'>)
  | ({ type?: 'link' } & Omit<LinkProps, 'className'>)

export interface ButtonStyles
  extends IAlign,
    IJustify,
    IGap,
    IPadding,
    IMargin,
    IWidth {
  theme?: ThemeValues
  size?: 'sm' | 'md' | 'lg' | 'max-y'
  shape?: 'square'
}

type ButtonProps = {
  styles: ButtonStyles
} & ButtonPropsType

const mcn = createClassNames(s)

const Button = ({
  children,
  type = 'button',
  styles,
  ...props
}: ButtonProps) => {
  return type === 'link' ? (
    <Link {...(props as LinkProps)} className={mcn(styles)}>
      {children}
    </Link>
  ) : (
    <button {...(props as DP<HTMLButtonElement>)} className={mcn(styles)}>
      {children}
    </button>
  )
}

export default Button
