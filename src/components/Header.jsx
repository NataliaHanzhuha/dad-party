import menu from '../images/menu.svg';
import React from 'react';
import Menu from './Menu';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';

function Header() {

  const headerStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '5px 10px',
    background: '#3d3d3d',
    zIndex: 2
  };

  const [toggleMenu, changeMenuState] = React.useState(false);

  const toggleMenuButton = () => {
    changeMenuState(!toggleMenu);
  };

  return <>
    <header style={headerStyles}>
      <Link to="/">
        <img src={logo} width={32} alt="logo"/>
      </Link>
      <button onClick={() => toggleMenuButton()}>
        <img src={menu}
             alt="menu button"
             width={30}
             height={30}/>
      </button>
    </header>
    {toggleMenu ? <Menu toggleMenuHandler={() => toggleMenuButton()}/> : <></>}
  </>;
}

export default Header;
