// Write a function called all which accepts an array and a callback
// and returns true if every value in the array returns true when
// passed as parameter to the callback function

const all = (arr, cb) => {
  if (arr.length === 0) return true;
  first = arr.shift();
  if (cb(first)) {
    return all(arr, cb);
  }
  return false;
};

function fun(num) {
  return num < 7;
}

const allAreLessThanSeven = all([1, 2, 3], fun);

console.log(allAreLessThanSeven);
