import React, { useState } from 'react'

import Button, { type ButtonStyles } from 'shared/kit/ui/Button/Button'
import cn from 'shared/lib/helpers/classNames'
import usePointerClick from 'shared/lib/hooks/usePointerClick'
import { type DP } from '../../../shared/lib/types'
import s from './AddToCartButton.module.scss'

interface AddToCartButtonProps extends Pick<DP, 'className'> {
  rotation: 'vertical' | 'horizontal'
  productId: string
  initValue?: number
}

const buttonStyles: ButtonStyles = {
  theme: 'secondary',
  size: 'max-y',
  px: 'md',
	align: 'center'
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
      setValue((prev) => prev + inc)
    }

  const addEvents = usePointerClick(handleChange(1))
  const remEvents = usePointerClick(handleChange(-1))

  return (
    <div className={cn(s.main, s[rotation], className)}>
      {value > 0 ? (
        <>
          <button {...addEvents} className={s.moreBtn}></button>
          <span>{value}</span>
          <button {...remEvents} className={s.lessBtn}></button>
        </>
      ) : (
        <Button {...addEvents} styles={buttonStyles}>
          Add To Cart
        </Button>
      )}
    </div>
  )
}

export default AddToCartButton
