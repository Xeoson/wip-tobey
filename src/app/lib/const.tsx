import { BsBoxSeam } from 'react-icons/bs'
import { GoLocation } from 'react-icons/go'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { type IProfileSettingItem } from '../../shared/lib/types'
import browserRoutes from './browserRoutes'

export const hexColorRegex = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/

export const profileSettings: IProfileSettingItem[] = [
  {
    icon: <GoLocation />,
    title: 'Delivery address',
    url: browserRoutes.addresses,
  },
  {
    icon: <BsBoxSeam />,
    title: 'Order history',
    url: browserRoutes.orderHistory,
  },
  {
    icon: <MdOutlineFavoriteBorder />,
    title: 'Favorite',
    url: browserRoutes.favorites,
  },
]

export const defaultAvatarUrl =
  'https://res.cloudinary.com/ds3ctqoro/image/upload/v1681982298/blank_avatar_egolkc.png'
