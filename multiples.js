// If we list all the natural numbers below 10 that are
// multiples of 3 and 5, we get 3,5, 6 and 9. The sum
// of these mutiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000

console.log(addMultiplesRec(10));
console.log(addMultiples(10));

function addMultiplesRec(n, current = 0) {
  if (n <= 0) {
    return 0;
  }
  if (current % 3 === 0 || current % 5 === 0) {
    return current + addMultiplesRec(n - 1, current + 1);
  } else {
    return addMultiplesRec(n - 1, current + 1);
  }
}

function addMultiples(n) {
  let total = 0;
  for (let i = 0; i < n; i++) {
    if (i % 3 === 0 || i % 5 == 0) {
      total += i;
    }
  }
  return total;
}
