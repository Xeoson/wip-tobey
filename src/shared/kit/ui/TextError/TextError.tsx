import { AiOutlineInfoCircle } from 'react-icons/ai'
import { type IMargin } from '../../lib/types'
import s from './TextError.module.scss'
import { createClassNames } from '@/shared/lib/helpers/moduleClassNames'

export interface TextErrorStyles extends IMargin {}

export interface TextErrorProps {
	className?: string,
  message: string
  styles?: TextErrorStyles
}

const mcn = createClassNames(s)

const TextError = ({ message, styles, className }: TextErrorProps) => {
  return (
    <p className={mcn(styles, className)}>
      <AiOutlineInfoCircle />
      {message}
    </p>
  )
}

export default TextError
