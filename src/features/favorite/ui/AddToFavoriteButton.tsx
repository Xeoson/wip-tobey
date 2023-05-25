import React from 'react'
import { MdFavorite } from 'react-icons/md'
import { type DP } from '../../../shared/lib/types'
import s from './AddToFavoriteButton.module.scss'
import cn from 'shared/lib/helpers/classNames'
import usePointerClick from 'shared/lib/hooks/usePointerClick'

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
	const events = usePointerClick(onAddFavorite)

  return (
    <button {...events} className={cn(s.main, className)}>
      <MdFavorite />
    </button>
  )
}

export default AddToFavoriteButton
