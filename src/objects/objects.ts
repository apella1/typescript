// the notion of encapsulation in JS

// using an object literal
const myTeam = {
  name: "Manchester City",
  coach: "Pep Guardiola",
  founded: 1987,
  praise: () => {
    return "Hola Cityzens";
  },
};

console.log(myTeam.praise());

// using dot notation
const otherFavoriteTeam = {};
otherFavoriteTeam.name = "Manchester United";
otherFavoriteTeam.hasWonUcl = true;
otherFavoriteTeam.praise = function () {
  return "GGMU";
};

console.log(otherFavoriteTeam.praise());

const user1 = {
  name: "Pope",
  score: 2,
  incrementScore: () => {
    user1.score++;
  },
};

console.log(user1.incrementScore());

// using Object.create()
const user3 = Object.create(null);

user3.name = "Eva";
user3.score = 4;
user3.incrementScore = function () {
  user3.score++;
};

console.log(user3.incrementScore());
