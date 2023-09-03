// Write a function that sums squares of numbers in list
// that may contain more lists
const SumSquares = (arr) => {
  total = 0;
  if (Number.isInteger(arr)) {
    return arr * arr;
  } else {
    if (Array.isArray(arr)) {
      for (let element of arr) {
        total += SumSquares(element);
      }
    }
  }
  return total;
};

let l = [1, 2, 3];
console.log(SumSquares(l)); // 1 + 4 + 9 = 14

l = [[[[[[[[[1]]]]]]]]];
console.log(SumSquares(l)); // 1 = 1

l = [10, [[10], 10], [10]];
console.log(SumSquares(l)); // 100 + 100 + 100 + 100 = 400
