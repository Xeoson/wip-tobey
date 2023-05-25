import { useState } from 'react'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { type DPInput } from 'shared/lib/types'
import Button from '../Buttons/Button'
import Input from './Input'

interface PasswordInputProps extends Omit<DPInput, 'type'> {}

const PasswordInput = (props: PasswordInputProps) => {
  const [isHidden, setIsHidden] = useState(true)
  return (
    <Input {...props} type={isHidden ? 'password' : 'text'}>
      <Button
        theme="none"
        size="max-y"
        onClick={() => {
          setIsHidden((p) => !p)
        }}
      >
        {isHidden ? <BsEye /> : <BsEyeSlash />}
      </Button>
    </Input>
  )
}

export default PasswordInput
