import Logo from '../../assets/logo.svg'
import browserRoutes from '../../common/browserRoutes'
import { useMatchTablet } from '../../main'
import NavbarUserBlock from '../UI/Blocks/NavbarUserBlock'
import LinkButton from '../UI/Buttons/LinkButton'
import MobileSearch from '../UI/MobileSearch'
import Search from '../UI/Search'
import s from './Navbar.module.scss'

interface NavbarProps {}

const Navbar = (props: NavbarProps) => {
  const matchTablet = useMatchTablet()

  return (
    <nav className={s.main}>
      <LinkButton to={browserRoutes.home} icon={<Logo />} />
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
