import { type DPInput } from '../../../shared/lib/types'
import './Input.module.scss'

export type InputProps = DPInput

const Input = ({ children, ...props }: InputProps) => {
  return (
    <label>
      <input {...props} />
      {children}
    </label>
  )
}

export default Input
