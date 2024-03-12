import { Link, Outlet } from 'react-router-dom';

import logo from '../../images/icons/logo.svg';
import menu from '../../images/icons/menu.svg';
import { Menu } from '../Menu';
import { useEffect, useState } from 'react';
import Footer from '../../utillits/Footer/Footer';
import { Loading } from '../../utillits/Loading';

function App() {
  const [loading, setLoading] = useState(true);
  const [toggleMenu, changeMenuState] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000);
  }, []);

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
    </header>

    {toggleMenu
      ? <Menu toggleMenuHandler={() => toggleMenuButton()}/>
      : <>
        <main><Outlet/></main>
        <Footer/>
      </>
    }
  </>;
}

export default App;
