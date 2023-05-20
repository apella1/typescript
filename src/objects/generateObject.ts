// using functions to generate an object

function createUser(name: string, score: number) {
  const newUser = {};
  newUser.name = name;
  newUser.score = score;
  newUser.incrementScore = function () {
    newUser.score++;
  };
  return newUser;
}

const john = createUser("John", 5);
console.log(john.incrementScore());
