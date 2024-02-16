import blinksBottom from '../../images/bottom.png';
import styles from './PartyMenu.module.css';

function PartyMenu() {
  const menuHash = {
    'starter': [{
      name: 'Crispy garlic breaded mushrooms',
      description: 'backed in a creamy sauce topped with chives',
    }],
    'main': [{
      name: 'tofu benedics fillo pockets',
      description: 'with a splash of green pea puree, roasted garlic and fried mushrooms'
    }],
    'dessert': [{
      name: 'nougat creme brulee with sea salt',
      description: 'topped with hazelnuts'
    }],
    'drinks': [{name: 'pear and champagne cocktail'}, {name: 'blood orange champagne mule'}]
  };
  const menuHeaders = Object.keys(menuHash);

  return <section className={styles.section} >
    <h1 className={styles.h1}>Party Menu</h1>

    <div className={styles.menuWrapper}>
      {menuHeaders.map((item, index) => {
        return <div className={styles.typeWrapperStyles} key={item + index}>
          <h2 className={styles.typeHeaderStyles}>{item}</h2>

          {menuHash[item].map((dish, index) => {
            return <div className={styles.dishWrapperStyles} key={index}>
              <h3 className={styles.dishNameStyle}>{dish.name}</h3>
              {dish.description && <i className="dish-description">{dish.description}</i>}
            </div>
          })}
        </div>
      })}
    </div>

    <img src={blinksBottom} alt="bg" className="bg-bottom-image"/>
  </section>
}

export default PartyMenu;
