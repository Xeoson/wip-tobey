import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../../assets/logo.svg'


interface MainLogoProps {}

const MainLogo = (props: MainLogoProps) => {
	return (
    <Link to="/">
      <Logo />
    </Link>
  );
};

export default MainLogo;