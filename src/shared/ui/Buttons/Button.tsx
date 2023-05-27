import cn from 'shared/lib/helpers/classNames'
import { type DPButton } from '../../../shared/lib/types'
import s from './Button.module.scss'

export interface ButtonProps {
  theme?: 'secondary' | 'primary' | 'none'
  size?: 'sm' | 'md' | 'lg' | 'max-y'
}

const Button = ({
  children,
  theme = 'primary',
  size = 'md',
  className,
  ...props
}: ButtonProps & DPButton) => {
  return (
    <button {...props} className={cn(s.main, s[theme], s[size], className)}>
      {children}
    </button>
  )
}

export default Button
