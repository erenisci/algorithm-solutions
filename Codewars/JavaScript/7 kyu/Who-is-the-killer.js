function killer(suspectInfo, dead) {
  return Object.keys(suspectInfo).find(x => dead.every(y => suspectInfo[x].includes(y)));
}
