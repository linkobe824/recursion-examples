// Write a function called productOfArray which takes in an
// array of numbers and returns the product of them all

const productOfArray = (arr) => {
  if (arr.length === 1) {
    return arr[0];
  } else {
    let first = arr[0];
    arr.shift();
    return first * productOfArray(arr);
  }
};

const six = productOfArray([1, 2, 3]); // 6
const sixty = productOfArray([1, 2, 3, 10]); // 60
console.log(six);
console.log(sixty);
