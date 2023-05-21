// using prototype chain to avoid storing the function definition on each object
// solution 2

function createNewUSer(name: string, score: number) {
  const newUser = Object.create(userFunctionStore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
  console.log(newUser.login());
}

// Object.create is always stored in the proto
const userFunctionStore = {
  increment: function (): number {
    return this.score + 1;
  },
  login: () => {
    return "Logged in!";
  },
  decrement: () => {
    function subtract() {
      return this.score - 1;
    }
    subtract.call(this);
  },
};

const amy = createNewUSer("Amy", 8);
let score = 8;

// the methods are accessed through the prototypal link (__proto__)
// the implicit 'this' parameter when executing the methods on the objects
console.log(amy.increment());
console.log(amy.login());
console.log(amy.increment());
console.log(amy.decrement());

// hasOwnProperty
// every object has a default __proto__ that links to Object.prototype

console.log(amy.hasOwnProperty("score"));
console.log(amy.hasOwnProperty("login"));

console.log(Object.isExtensible(amy));
console.log(Object.preventExtensions(amy));
