import LinkButton from 'shared/ui/Buttons/LinkButton'
import MobileSearch from 'widgets/MobileSearch/MobileSearch'
import NavbarUserBlock from 'widgets/Navbar/ui/NavbarUserBlock'
import browserRoutes from '../../../app/lib/browserRoutes'
import Logo from 'shared/lib/assets/logo.svg'
import { useMatchTablet } from '../../../main'
import Search from '../../Search/Search'
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
