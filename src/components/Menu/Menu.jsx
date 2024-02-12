import { Link } from 'react-router-dom';
import { Modal } from '../../utillits/Modal/Modal';
import styles from './Menu.module.css';
import Footer from '../Footer/Footer';

function Menu({toggleMenuHandler}) {
  const routes = [
    {path: '/', name: 'Home'},
    {path: '/biography', name: 'Biography'},
    {path: '/well-wishes', name: 'Well Wishes'},
    {path: '/party-menu', name: 'Party Main'}
  ];

  const menu = <>
    <menu className={styles.menu}>
      {routes.map((route, index) =>
        <h2 key={index}
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
