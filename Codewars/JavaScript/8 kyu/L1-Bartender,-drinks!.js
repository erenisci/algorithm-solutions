function getDrinkByProfession(param) {
  param = param.toLowerCase();
  const vars = {
    jabroni: 'Patron Tequila',
    'school counselor': 'Anything with Alcohol',
    programmer: 'Hipster Craft Beer',
    'bike gang member': 'Moonshine',
    politician: 'Your tax dollars',
    rapper: 'Cristal',
  };

  return param in vars ? vars[param] : 'Beer';
}
