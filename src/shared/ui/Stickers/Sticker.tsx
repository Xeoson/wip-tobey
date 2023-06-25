import cn from '@/shared/lib/helpers/classNames'
import s from './Sticker.module.scss'

interface StickerProps {
  text: string
  theme?: 'secondary' | 'primary'
}

const Sticker = ({ text, theme = 'primary', ...props }: StickerProps) => {
  return <span className={cn(s.main, s[theme])}>{text}</span>
}

export default Sticker
