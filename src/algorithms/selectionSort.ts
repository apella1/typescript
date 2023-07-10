function selectionSort(numbers: number[]): number[] {
    const length = numbers.length;
  
    for (let i = 0; i < length - 1; i++) {
      let minIndex = i;
  
      for (let j = i + 1; j < length; j++) {
        if (numbers[j] < numbers[minIndex]) {
          minIndex = j;
        }
      }
  
      if (minIndex !== i) {
        [numbers[i], numbers[minIndex]] = [numbers[minIndex], numbers[i]];
      }
    }
  
    return numbers;
  }
  
  // Generate an array with random numbers
  function generateRandomArray(length: number, min: number, max: number): number[] {
    const numbers: number[] = [];
  
    for (let i = 0; i < length; i++) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      numbers.push(randomNumber);
    }
  
    return numbers;
  }
  
  // Usage example
  const size = 10;
  const min = 1;
  const max = 100;
  
  const numbers = generateRandomArray(size, min, max);
  console.log('Unsorted numbers:', numbers);
  
  const sortedNumbers = selectionSort(numbers);
  console.log('Sorted numbers:', sortedNumbers);