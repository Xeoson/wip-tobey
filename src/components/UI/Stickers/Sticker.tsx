
import React from 'react'
import s from './Sticker.module.scss'

interface StickerProps {
  text: string
  color?: 'secondary'
}

const Sticker = ({ text, color, ...props }: StickerProps) => {
  return <span className={`${s.main} ${color ? s[color] : ''}`}>{text}</span>
}

export default Sticker
