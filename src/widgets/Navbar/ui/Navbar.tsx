import { useMatchTablet } from 'app/lib/const'
import useTheme from 'app/lib/theme/useTheme'
import Logo from 'shared/lib/assets/logo.svg'
import LinkButton from 'shared/ui/Buttons/LinkButton'
import MobileSearch from 'widgets/MobileSearch/MobileSearch'
import NavbarUserBlock from 'widgets/Navbar/ui/NavbarUserBlock'
import browserRoutes from '../../../app/lib/browserRoutes'
import Search from '../../Search/Search'
import s from './Navbar.module.scss'
import SwitcherButton from '../../../shared/ui/Buttons/SwitcherButton'
import ThemeSwitcher from 'app/ui/ThemeSwitcher'

interface NavbarProps {}

const Navbar = (props: NavbarProps) => {
  const matchTablet = useMatchTablet()

  return (
    <nav className={s.main}>
      <div>
        <LinkButton className={s.logo} theme="none" to={browserRoutes.home}>
          <Logo />
        </LinkButton>
        <ThemeSwitcher />
      </div>
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
