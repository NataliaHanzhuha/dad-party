import menu from '../../images/icons/menu.svg';
import { useState } from 'react';
import { Menu } from '../Menu';
import { Link } from 'react-router-dom';
import logo from '../../images/icons/logo.svg';
import styles from './Header.module.css';

function Header() {
  const [toggleMenu, changeMenuState] = useState(false);

  const toggleMenuButton = () => {
    changeMenuState(!toggleMenu);
  };

  return <>
    <header className={styles.header}>
      <Link to="/">
        <img src={logo} alt="logo"/>
      </Link>

      <button onClick={() => toggleMenuButton()}>
        <img src={menu}
             alt="menu button"/>
      </button>
    </header>

    {toggleMenu ? <Menu toggleMenuHandler={() => toggleMenuButton()}/> : <></>}
  </>;
}

export default Header;
