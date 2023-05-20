
import React from 'react'
import s from './IconButton.module.scss'
import { type DPButton } from '../../../types'

interface IconButtonProps extends DPButton {}

const IconButton = ({ children, ...props }: IconButtonProps) => {
  return <button {...props} className={s.main}>{children}</button>
}

export default IconButton
