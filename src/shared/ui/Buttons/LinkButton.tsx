import { Link, type LinkProps } from 'react-router-dom'
import cn from 'shared/lib/helpers/classNames'
import { type ButtonProps } from './Button'
import s from './Button.module.scss'

interface LinkButtonProps extends ButtonProps, LinkProps {}

const LinkButton = ({
  children,
  theme = 'primary',
  size = 'md',
  className,
  ...props
}: LinkButtonProps) => {
  return (
    <Link
      {...props}
      className={cn(s.main, s[theme], s[size], className)}
    >{children}</Link>
  )
}

export default LinkButton
