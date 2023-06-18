import { useState } from 'react'
import { type ButtonStyles } from 'shared/kit/ui/Button/Button'
import cn from 'shared/lib/helpers/classNames'
import { type DP } from 'shared/lib/types'
import s from './CouponInput.module.scss'

const buttonStyles: ButtonStyles = {}

interface CouponInputProps extends Pick<DP, 'className'> {}

const CouponInput = ({ className, ...props }: CouponInputProps) => {
  const [value, setValue] = useState('')

  const handleClick = () => {}

  return (
    <div className={cn(s.main, className)}>
      <span>Have a coupon code? Enter here</span>
      {/* <Input
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
        }}
      >
        <Button styles={buttonStyles} onClick={handleClick}>
          Apply
        </Button>
      </Input> */}
    </div>
  )
}

export default CouponInput
