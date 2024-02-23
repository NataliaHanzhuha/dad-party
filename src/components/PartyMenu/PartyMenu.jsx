import styles from './PartyMenu.module.css';
import { menuHash } from '../../constants';

function PartyMenu() {

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
