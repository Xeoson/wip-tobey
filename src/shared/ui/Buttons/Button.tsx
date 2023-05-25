import cn from 'shared/lib/helpers/classNames'
import { type DPButton } from '../../../shared/lib/types'
import s from './Button.module.scss'

interface ButtonProps extends DPButton {
  theme?: 'secondary' | 'primary' | 'none'
  size?: 'sm' | 'md' | 'lg' | 'max-y'
}

const Button = ({
  children,
  theme = 'primary',
  size = 'md',
  className,
  ...props
}: ButtonProps) => {
  return (
    <button {...props} className={cn(s.main, s[theme], s[size], className)}>
      {children}
    </button>
  )
}

export default Button
