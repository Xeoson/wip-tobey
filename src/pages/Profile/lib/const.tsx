import browserRoutes from 'app/lib/browserRoutes'
import { BsBoxSeam } from 'react-icons/bs'
import { GoLocation } from 'react-icons/go'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { type IProfileLink } from './types'

export const profileSettings: IProfileLink[] = [
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
