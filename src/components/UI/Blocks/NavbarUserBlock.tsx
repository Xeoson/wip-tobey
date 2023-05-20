import { MdOutlineFavoriteBorder, MdOutlineShoppingCart } from 'react-icons/md'
import browserRoutes from '../../../common/browserRoutes'
import { userMock } from '../../../mocks/user'
import LinkButton from '../Buttons/LinkButton'
import User from '../Cards/User'
import s from './NavbarUserBlock.module.scss'

interface NavbarUserBlockProps {}

const NavbarUserBlock = (props: NavbarUserBlockProps) => {
  return (
    <div className={s.main}>
      <LinkButton
        to={browserRoutes.favorites}
        text={'Favorites'}
        icon={<MdOutlineFavoriteBorder />}
      />
      <LinkButton
        to={browserRoutes.cart}
        text={'Cart'}
        icon={<MdOutlineShoppingCart />}
      />
      <LinkButton
        to={browserRoutes.userProfile}
        icon={<User size="sm" user={{ avatar: userMock.avatar }} />}
      />
    </div>
  )
}

export default NavbarUserBlock
