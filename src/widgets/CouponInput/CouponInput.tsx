import { useState } from 'react'
import cn from 'shared/lib/helpers/classNames'
import { type DP } from 'shared/lib/types'
import Button from 'shared/ui/Buttons/Button'
import Input from 'shared/ui/Inputs/Input'
import s from './CouponInput.module.scss'

interface CouponInputProps extends Pick<DP, 'className'> {}

const CouponInput = ({ className, ...props }: CouponInputProps) => {
  const [value, setValue] = useState('')

  const handleClick = () => {}

  return (
    <div className={cn(s.main, className)}>
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
