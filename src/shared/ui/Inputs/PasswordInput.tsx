import { useState, type MutableRefObject } from 'react'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import { type DPInput } from 'shared/lib/types'
import Button from '../Buttons/Button'
import FormInput from './FormInput'

interface PasswordInputProps extends Omit<DPInput, 'type'> {}

const PasswordInput = (props: PasswordInputProps) => {
  const [isHidden, setIsHidden] = useState(true)
  return (
    <FormInput
      {...props}
      ref={props.ref as MutableRefObject<HTMLInputElement>}
      type={isHidden ? 'password' : 'text'}
    >
      <Button
        theme="none"
        size="max-y"
        onClick={() => {
          setIsHidden((p) => !p)
        }}
      >
        {isHidden ? <BsEye /> : <BsEyeSlash />}
      </Button>
    </FormInput>
  )
}

export default PasswordInput
