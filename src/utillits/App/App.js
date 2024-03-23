import { Link, Outlet } from 'react-router-dom';

import logo from '../../images/icons/logo.svg';
import menu from '../../images/icons/menu.svg';
import { Menu } from '../Menu';
import { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import { Loading } from '../Loading';
import { useLocation } from 'react-router-dom';
import { BigMenu } from '../Menu/Menu';
// import { routeNames } from '../../router';
export const routeNames = {
  Main: '/',
  Biography: '/biography',
  Wishes: '/well-wishes',
  Menu: '/party-menu',
  Program: '/events',
  Media: '/contact-us'
};
function App() {
  const [loading, setLoading] = useState(true);
  const [toggleMenu, changeMenuState] = useState(false);
  const location = useLocation();
  const [label, setLabel] = useState(null);

  useEffect(() => {
    // runs on location, i.e. route, change
    console.log('handle route change here', location)

    if (location?.pathname?.length === 1) {
      setLabel(null)
    } else {
      setLabel(getKeyByValue(location?.pathname))
    }
  }, [location])

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000);
  }, []);

  const getKeyByValue = (value) => {
    return Object.keys(routeNames).find(key => routeNames[key] === value);
  }

  const toggleMenuButton = () => {
    changeMenuState(!toggleMenu);
  };

  if (loading && process.env.NODE_ENV === 'production') {
    return <Loading />;
  }

  return <>
    <header className='header'>
      <Link to="/well-wishes">
        <img src={logo}
             width={32}
             alt="logo"/>
      </Link>

      <button onClick={() => toggleMenuButton()}>
        <img src={menu}
             alt="menu button"
             width={30}
             height={30}/>
      </button>

      <BigMenu className="big-menu"></BigMenu>
    </header>

    {toggleMenu
      ? <Menu toggleMenuHandler={() => toggleMenuButton()}/>
      : <>
        <main>
          <h1 className={"hh"}>{label}</h1>
          <Outlet/>
          </main>
        <Footer/>
      </>
    }
  </>;
}

export default App;
