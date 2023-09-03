// Given a multi-dimensional integer array, return the total
// number of integers stored inside this array

const totalIntegers = (arr) => {
  let total = 0;
  if (Number.isInteger(arr)) {
    return 1;
  } else {
    if (Array.isArray(arr)) {
      for (let element of arr) {
        total += totalIntegers(element);
      }
    }
  }
  return total;
};

const seven = totalIntegers([
  [[5], 3],
  0,
  2,
  [1, 2, [["FOO", 5]]],
  ["foo"],
  [],
  [4, [5, 6]],
]); // 7
console.log(seven);
