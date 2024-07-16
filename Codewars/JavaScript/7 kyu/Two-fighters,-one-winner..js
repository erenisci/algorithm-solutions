function declareWinner(fighter1, fighter2, firstAttacker) {
  const hitTimesF1 = Math.ceil(fighter2.health / fighter1.damagePerAttack);
  const hitTimesF2 = Math.ceil(fighter1.health / fighter2.damagePerAttack);

  if (hitTimesF1 === hitTimesF2) return firstAttacker;
  else return hitTimesF1 > hitTimesF2 ? fighter2.name : fighter1.name;
}
