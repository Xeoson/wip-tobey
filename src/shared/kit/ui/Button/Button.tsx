import {
  type IAlign,
  type IColor,
  type IGap,
  type IHeight,
  type IJustify,
  type IMargin,
  type IPadding,
  type IRound,
  type IWidth,
} from '@/shared/kit/lib/types'
import { type ThemeValues } from '@/shared/kit/lib/types/const'
import { createClassNames } from '@/shared/lib/helpers/moduleClassNames'
import { type DP, type DPButton } from '@/shared/lib/types'
import { Link, type LinkProps } from 'react-router-dom'
import s from './Button.module.scss'

export type ButtonPropsType =
  | ({ as?: 'button' } & Omit<DPButton, 'className'>)
  | ({ as?: 'link' } & Omit<LinkProps, 'className'>)

export interface ButtonStyles
  extends IAlign,
    IJustify,
    IGap,
    IPadding,
    IMargin,
    IWidth,
    IColor,
    IHeight,
    IRound {
  theme?: ThemeValues
  size?: 'sm' | 'md' | 'lg' | 'max-y'
  shape?: 'square'
}

type ButtonProps = {
  styles?: ButtonStyles
} & ButtonPropsType

const mcn = createClassNames(s)

const Button = ({ children, as = 'button', styles, ...props }: ButtonProps) => {
  return as === 'link' ? (
    <Link {...(props as LinkProps)} className={mcn(styles)}>
      {children}
    </Link>
  ) : (
    <button type="button" {...(props as DP<HTMLButtonElement>)} className={mcn(styles)}>
      {children}
    </button>
  )
}

export default Button
