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

  const wrapper = {
    gap: '25px',
  };

  const typeWrapperStyles = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '15px'
  };

  const typeHeaderStyles = {
    textTransform: 'uppercase',
    margin: 0
  }

  const dishWrapperStyles = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    gap: '10px'
  }

  const dishNameStyle = {
    ...typeHeaderStyles,
    color: '#ddb86d'
  }
  return <section style={wrapper} id="partyMenu">
    <h1>Party Menu</h1>

    {menuHeaders.map((item, index) => {
      return <div style={typeWrapperStyles} key={item + index}>
        <h2 style={typeHeaderStyles}>{item}</h2>

        {menuHash[item].map((dish, index) => {
          return <div style={dishWrapperStyles} key={index}>
            <h3 style={dishNameStyle}>{dish.name}</h3>
            {dish.description && <div className="dish-description">{dish.description}</div>}
          </div>
        })}
      </div>
    })}
  </section>
}

export default PartyMenu;
