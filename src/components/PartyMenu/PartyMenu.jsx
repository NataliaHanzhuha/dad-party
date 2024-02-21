import styles from './PartyMenu.module.css';

function PartyMenu() {
  const menuHash = {
    'starters': [
      {name: 'Cat Fish Pepper soup', description: 'with bread rolls'},
      {name: 'Goat Meat Pepper soup', description: 'with bread rolls'},
      {name: 'Spring Rolls'},
      {name: 'Samosa and Puff Puff', description: '(a fried South Asian pastry with filling and mini donates)'},
      {name: 'Chicken Wings'},
    ],
    'main course': [
      {name: 'Chinese Fried Rice', description: 'with mongolian beef sauce'},
      {name: 'Singapore Noodles', description: 'with beef and broccoli sauce'},
      {name: 'Offada Rice', description: 'with ayamase'},
      {name: 'Efo Riro', description: 'with pounded yam'},
      {name: 'Ogbono', description: 'with plantain flour'},
      {name: 'Party Jollof Rice'},
      {name: 'Avocado Salad'},
    ],
    'sides': [
      {name: 'Moin Moin', description: '(steamed bean cakes)'},
      {name: 'Coleslaw'},
      {name: 'Plaintain'},
      {name: 'Roasted Potato'},
      {name: 'Sauteed Spinach'},
    ],
    'proteins': [
      {name: 'Gizzard', description: "(bird's stomach)"},
      {name: 'Chicken'},
      {name: 'Fish'},
      {name: 'Goat Meat'},
    ],
    'desserts': [
      {name: 'Parfait'},
      {name: 'Fruit Salad'}
    ],
  };

  const camelCase = (str) => {
    return str
      .replace(/\s(.)/g, (a) =>  a.toUpperCase())
      .replace(/\s/g, '')
      .replace(/^(.)/, (b) => b.toLowerCase());
  }

  const menuHeaders = Object.keys(menuHash);

  return <section className={styles.section}>
    <h1 className={styles.h1}>Party Menu</h1>

    <div className={styles.menuWrapper}>
      {menuHeaders.map((item, index) => {
        return <div className={styles.typeWrapperStyles + ' ' +camelCase(item)}
                    key={item + index}>
          <h2 className={styles.typeHeaderStyles}>{item}</h2>

          {menuHash[item].map((dish, index) => {
            return <div className={styles.dishWrapperStyles}
                        key={index}>
              <h3 className={styles.dishNameStyle}>{dish.name}</h3>
              {dish.description && <i className="dish-description">{dish.description}</i>}
            </div>;
          })}
        </div>;
      })}
    </div>
  </section>;
}

export default PartyMenu;
