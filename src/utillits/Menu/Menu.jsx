import { Link } from 'react-router-dom';
import { Modal } from '../Modal/Modal';
import styles from './Menu.module.css';
import Footer from '../Footer/Footer';
import { routesForMenu } from '../../router';

function Menu({toggleMenuHandler}) {
  const menu = <>
    <menu className={styles.menu}>
      {routesForMenu.map((route, index) =>
        <button key={index}
                className={styles.menuItem}
                onClick={toggleMenuHandler}>
          <Link to={route.path}>{route.name}</Link>
        </button>)}
    </menu>

    <button onClick={toggleMenuHandler}
            className={styles.button + ' big-close-btn'}>Close
    </button>
    <Footer/>
  </>;

  return <Modal closeModal={toggleMenuHandler}
                header="Menu"
                content={menu}>
  </Modal>;
}

export default Menu;

export function BigMenu() {
  return <menu className={styles.bigMenu}>
    {routesForMenu.map((route, index) =>
      <button key={index}
              className={styles.bigMenuItem}>
        <Link to={route.path}>{route.name}</Link>
      </button>)}
  </menu>
}
