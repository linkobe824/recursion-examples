// Write a function called sumRange. It will take a number and return
//  the sum of all numbers from 1 up to the number passed in.

const sumRange = (n) => {
  if (n == 1) {
    return 1;
  } else {
    return n + sumRange(n - 1);
  }
};

console.log(sumRange(3));
