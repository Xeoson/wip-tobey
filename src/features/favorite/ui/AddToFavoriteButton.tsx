import React from 'react'
import { MdFavorite } from 'react-icons/md'
import { type DP } from '../../../shared/lib/types'
import s from './AddToFavoriteButton.module.scss'
import cn from 'shared/lib/helpers/classNames'

interface AddToFavoriteButtonProps extends Pick<DP, 'className'> {
  productId: string
}

const AddToFavoriteButton = ({
  productId,
  className,
  ...props
}: AddToFavoriteButtonProps) => {
  const onAddFavorite = (e: React.PointerEvent<HTMLButtonElement>) => {
    e.stopPropagation()
  }

  return (
    <button onClick={onAddFavorite} className={cn(s.main, className)}>
      <MdFavorite />
    </button>
  )
}

export default AddToFavoriteButton
