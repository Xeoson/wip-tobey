import browserRoutes from 'app/lib/browserRoutes'
import { LoginActions } from 'features/login/model/slice'
import UserArea from 'features/login/ui/UserArea/UserArea'
import { MdOutlineFavoriteBorder, MdOutlineShoppingCart } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import LinkButton from 'shared/ui/Buttons/LinkButton'
import s from './NavbarUserBlock.module.scss'

interface NavbarUserBlockProps {}

const NavbarUserBlock = (props: NavbarUserBlockProps) => {
  const dispatch = useDispatch()

  const handleLogin = () => {
    dispatch(LoginActions.set({ isOpen: true }))
  }

  return (
    <div className={s.main}>
      <LinkButton
        className={s.linkBtn}
        theme={'none'}
        size="md"
        to={browserRoutes.favorites}
      >
        <MdOutlineFavoriteBorder />
        <span>Favorites</span>
      </LinkButton>
      <LinkButton
        className={s.linkBtn}
        theme={'none'}
        size="md"
        to={browserRoutes.cart}
      >
        <MdOutlineShoppingCart />
        <span>Cart</span>
      </LinkButton>
      <UserArea />
    </div>
  )
}

export default NavbarUserBlock
