function makeFunction() {
  function addFour(input: number) {
    return input + 4;
  }
  return addFour;
}

const additionByFour = makeFunction();
const myResult = additionByFour(4);
console.log(myResult);
