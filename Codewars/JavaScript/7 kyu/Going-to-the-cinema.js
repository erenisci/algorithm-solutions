function movie(card, ticket, perc) {
  let n = 0;
  let totalCostSystemA = 0,
    totalCostSystemB = card;
  let costPreviousTicket = ticket * perc;

  while (Math.ceil(totalCostSystemB) >= totalCostSystemA) {
    n++;
    totalCostSystemA = ticket * n;
    totalCostSystemB += costPreviousTicket;
    costPreviousTicket *= perc;
  }

  return n;
}
