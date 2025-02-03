const map = new Map([
  [1, "One"],
  [2, "Two"],
]);
console.log(map);

const superHeroTeamMap = new Map();
superHeroTeamMap.set("Superman", "Justice League");
superHeroTeamMap.set("Thor", "Avengers");
superHeroTeamMap.set("spiderMan", "Avengers");
console.log(superHeroTeamMap.get("Superman"));
