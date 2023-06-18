import { useMatchTablet } from 'app/lib/const'
import ThemeSwitcher from 'app/ui/ThemeSwitcher'
import Button, { type ButtonStyles } from 'shared/kit/ui/Button/Button'
import Logo from 'shared/lib/assets/logo.svg'
import MobileSearch from 'widgets/MobileSearch/MobileSearch'
import NavbarUserBlock from 'widgets/Navbar/ui/NavbarUserBlock'
import browserRoutes from '../../../app/lib/browserRoutes'
import Search from '../../Search/Search'
import s from './Navbar.module.scss'
import Flex from 'shared/kit/ui/Flex/Flex'

const logoBtnStyles: ButtonStyles = {
  theme: 'none',
}

interface NavbarProps {}

const Navbar = (props: NavbarProps) => {
  const matchTablet = useMatchTablet()

  return (
    <nav className={s.main}>
      <Flex gapX='md'>
        <Button as="link" styles={logoBtnStyles} to={browserRoutes.home}>
          <Logo />
        </Button>
        <ThemeSwitcher />
      </Flex>
      {matchTablet ? (
        <>
          <Search />
          <NavbarUserBlock />
        </>
      ) : (
        <MobileSearch />
      )}
    </nav>
  )
}

export default Navbar
