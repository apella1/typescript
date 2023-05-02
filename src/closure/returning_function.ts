function makeFunction() {
  function addFour(input: number) {
    return input + 4;
  }
  return addFour;
}

// before the function is called, the label(additionByFour) is uninitialized
const additionByFour = makeFunction();
const myResult = additionByFour(4);
console.log(myResult);
