import browserRoutes from 'app/lib/browserRoutes'
import UserArea from 'features/login/ui/UserArea/UserArea'
import { MdOutlineFavoriteBorder, MdOutlineShoppingCart } from 'react-icons/md'
import Button, { type ButtonStyles } from 'shared/kit/ui/Button/Button'
import Flex from 'shared/kit/ui/Flex/Flex'
import s from './NavbarUserBlock.module.scss'

const buttonStyles: ButtonStyles = {
  theme: 'none',
  gapX: 'sm',
}

interface NavbarUserBlockProps {}

const NavbarUserBlock = (props: NavbarUserBlockProps) => {
  return (
    <div className={s.main}>
      <Flex gapX="lg" align="center">
        <Button type="link" styles={buttonStyles} to={browserRoutes.favorites}>
          <MdOutlineFavoriteBorder />
          <span>Favorites</span>
        </Button>
        <Button type="link" styles={buttonStyles} to={browserRoutes.cart}>
          <MdOutlineShoppingCart />
          <span>Cart</span>
        </Button>
        <UserArea />
      </Flex>
    </div>
  )
}

export default NavbarUserBlock
