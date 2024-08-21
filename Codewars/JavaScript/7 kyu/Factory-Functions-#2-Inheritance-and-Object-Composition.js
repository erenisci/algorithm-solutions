function constructionWorker(firstName, lastName, age, gender, married, boss) {
  const worker = person(firstName, lastName, age, gender, true, 'construction worker', married);
  worker.boss = boss;
  worker.sayBossName = function () {
    return `My boss is called ${this.boss} and is a very nice person!`;
  };
  return worker;
}
