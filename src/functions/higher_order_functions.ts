type NumManipulation = (input: number) => number;

function copyArrayAndManipulate(
  array: number[],
  instructions: NumManipulation
) {
  const output: number[] = [];

  for (let i = 0; i < array.length; i++) {
    output.push(instructions(array[i]));
  }

  return output;
}

const myArray = [3, 4, 6];

function addThree(input: number) {
  return input + 3;
}

const additionResult = copyArrayAndManipulate(myArray, addThree);
console.log(additionResult);

const doubleResult = copyArrayAndManipulate(myArray, (input) => input * 2);
console.log(doubleResult);
