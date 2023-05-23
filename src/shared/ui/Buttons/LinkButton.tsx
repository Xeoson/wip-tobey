
import React, { type ComponentProps, type ReactElement } from 'react'
import s from './LinkButton.module.scss'
import { Link } from 'react-router-dom'

interface LinkButtonProps extends ComponentProps<typeof Link> {
  icon: ReactElement
  text?: string
}

const LinkButton = ({ children, icon, text, ...props }: LinkButtonProps) => {
  return (
    <Link {...props} className={s.main}>
      {icon}
      {text && <span>{text}</span>}
    </Link>
  )
}

export default LinkButton
