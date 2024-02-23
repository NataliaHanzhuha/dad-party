import { Link } from 'react-router-dom';
import { Modal } from '../../utillits/Modal/Modal';
import styles from './Menu.module.css';
import Footer from '../../utillits/Footer/Footer';
import { routesForMenu } from '../../router';

function Menu({toggleMenuHandler}) {
  const menu = <>
    <menu className={styles.menu}>
      {routesForMenu.map((route, index) =>
        <h2 key={index}
            className={styles.menuItem}
            onClick={toggleMenuHandler}>
          <Link to={route.path}>{route.name}</Link>
        </h2>)}

      <button onClick={toggleMenuHandler}
              className={styles.button + ' big-close-btn'}>Close
      </button>
    </menu>
    <Footer/>
  </>;

  return <Modal closeModal={toggleMenuHandler}
                header="Menu"
                content={menu}>
  </Modal>;
}

export default Menu;
