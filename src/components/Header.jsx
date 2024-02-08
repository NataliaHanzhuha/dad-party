import menu from '../images/menu.svg';
import React from 'react';
import Menu from './Menu';
import { Link } from 'react-router-dom';

function Header() {
  const buttonStyles = {
    background: 'transparent',
    border: 'none'
  };

  const headerStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 0',
    position: 'fixed',
    top: 0,
    width: '100%',
    background: '#1c1c1c'
  };

  const [toggleMenu, changeMenuState] = React.useState(false);

  const toggleMenuButton = () => {
    changeMenuState(!toggleMenu);
  };

  return <>
    <header style={headerStyles}>
      <Link to="/">Logo</Link>
      <button style={buttonStyles}
              onClick={() => toggleMenuButton()}>
        <img src={menu}
             alt="menu button"
             width={30}
             height={30}/>
      </button>
    </header>
    {toggleMenu}
    {toggleMenu ? <Menu toggleMenuHandler={() => toggleMenuButton()}/> : <></>}
  </>;
}

export default Header;
