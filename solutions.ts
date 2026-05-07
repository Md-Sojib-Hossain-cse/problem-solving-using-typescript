//solution 1

const filterEvenNumbers = (numbers: number[]): number[] => {
  const result = numbers.filter((number) => number % 2 === 0);
  return result;
};

filterEvenNumbers([1, 2, 3, 4, 5, 6]);
