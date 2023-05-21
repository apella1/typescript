// using prototype chain to avoid storing the function definition on each object
// solution 2

function createNewUSer(name: string, score: number) {
  const newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
}

const userFunctionStore = {
  increment: function (): number {
    return this.score + 1;
  },
  login: () => {
      return "Logged in!"
  },
};

const amy = createNewUSer("Amy", 8);
console.log(amy.increment());
console.log(amy.login());
console.log(amy.increment());