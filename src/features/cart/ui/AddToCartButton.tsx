import React, { useState } from 'react'

import cn from 'shared/lib/helpers/classNames'
import { type DP } from '../../../shared/lib/types'
import s from './AddToCartButton.module.scss'

interface AddToCartButtonProps extends Pick<DP, 'className'> {
  rotation: 'vertical' | 'horizontal'
  productId: string
  initValue?: number
}

const AddToCartButton = ({
  initValue = 0,
  rotation,
  productId,
  className,
  ...props
}: AddToCartButtonProps) => {
  const [value, setValue] = useState(initValue)

  const handleChange =
    (inc: number) => (e: React.PointerEvent<HTMLButtonElement>) => {
      e.stopPropagation()
      const val = value + inc
      setValue(val)
    }

  return (
    <div className={cn(s.main, s[rotation], className)}>
      <button className={s.moreBtn} onClick={handleChange(1)}></button>
      {value > 0 && (
        <>
          <span>{value}</span>
          <button className={s.lessBtn} onClick={handleChange(-1)}></button>
        </>
      )}
    </div>
  )
}

export default AddToCartButton
