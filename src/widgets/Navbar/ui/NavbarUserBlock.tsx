import { MdOutlineFavoriteBorder, MdOutlineShoppingCart } from 'react-icons/md'
import s from './NavbarUserBlock.module.scss'
import browserRoutes from 'app/lib/browserRoutes'
import User from 'entities/user-card/ui/User'
import { userMock } from 'shared/lib/mocks/user'
import LinkButton from 'shared/ui/Buttons/LinkButton'

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
