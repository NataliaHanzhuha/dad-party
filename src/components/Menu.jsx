import closeIcon from '../images/close.svg';
import { Link } from 'react-router-dom';

function Menu({toggleMenuHandler}) {
  const menuWrapper = {
    position: 'fixed',
    top: 0,
    left: 0,
    gap: '15xp',
    background: '#1c1c1c',
    zIndex: 2,
    width: '100%',
    height: '100%',
    // padding: '15px',
    overflow: 'hidden',
    paddingTop: 0
  };

  const titleStyles = {
    borderBottom: '1px solid white'
  };

  const menuStyle = {
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '15xp',
    alignItems: 'center',
    width: '100%',
    padding: 0
  };

  const routes = [
    {path: '/', name: 'Main'},
    {path: '/biography', name: 'Biography'},
    {path: '/well-wishes', name: 'Well Wishes'},
    {path: '/party-menu', name: 'Party Menu'},
  ];
  return <section style={menuWrapper}>
    <button className="little-close-btn">
      <img src={closeIcon}
           width={24}
           alt="sss"
           onClick={toggleMenuHandler}/>
    </button>

    <h1 style={titleStyles}>Menu</h1>

    <menu style={menuStyle}>
      {routes.map((route, index) =>
        <h2 key={index}
            onClick={toggleMenuHandler}>
          <Link to={route.path}>{route.name}</Link>
        </h2>
      )}

      <button onClick={toggleMenuHandler}
              className="big-close-btn">Close
      </button>
    </menu>

  </section>;
}

export default Menu;
