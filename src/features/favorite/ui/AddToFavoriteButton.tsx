import React from 'react'
import { MdFavorite } from 'react-icons/md'
import { type DP } from '../../../shared/lib/types'
import s from './AddToFavoriteButton.module.scss'

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
    <button onClick={onAddFavorite} className={`${s.main} ${className ?? ''}`}>
      <MdFavorite />
    </button>
  )
}

export default AddToFavoriteButton
