function bubbleSort(array: number[]) {
  const arrayLength = array.length;

  for (let i = 0; i < arrayLength - 1; i++) {
    for (let j = 0; j < arrayLength - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}

function bubbleSortUsingWhile(array: number[]) {
  let arrayLength = array.length;
  let i = 0;
  let j = 0;
  while (i < arrayLength - 1) {
    while (j < arrayLength - i - 1) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}

type BubbleSort = ReturnType<typeof bubbleSort>;

type ReturnTypeImpl<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer A
  ? A
  : any;

type ParametersImpl<T extends (...args: any) => any> = T extends (
  ...args: infer A
) => any
  ? A
  : never;

type BubbleSortParameters = ParametersImpl<typeof bubbleSort>;
type BubbleSortParameters1 = Parameters<typeof bubbleSort>;

const unsortedArray: number[] = [23, 78, 3, 1, -4, 18];

const sortedArray = bubbleSort([...unsortedArray]);
// const sortedArrayUsingWhile = bubbleSortUsingWhile([...unsortedArray]);

console.log(unsortedArray);
console.log(sortedArray);
// console.log(sortedArrayUsingWhile);
