import { useState } from 'react'
import { type DP } from '../../../types'
import Button from '../Buttons/Button'
import s from './CouponInput.module.scss'
import Input from './Input'

interface CouponInputProps extends Pick<DP, 'className'> {}

const CouponInput = ({ className, ...props }: CouponInputProps) => {
  const [value, setValue] = useState('')

  const handleClick = () => {}

  return (
    <div className={`${s.main} ${className ?? ''}`}>
      <span>Have a coupon code? Enter here</span>
      <Input
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
        }}
      >
        <Button onClick={handleClick}>Apply</Button>
      </Input>
    </div>
  )
}

export default CouponInput
