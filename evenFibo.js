// sum the values of even numbers in a fibonacci sequence not exeeding 4 million
// n numero a generar
// a es el actual y b es el siguiente numero de fibonacci en la secuencia

function fibonacciSumEven(n, a = 0, b = 1, sum = 0) {
    if (n === 0) {
      return sum;
    }
  
    // Check if the current Fibonacci number (b) is even
    if (b % 2 === 0) {
      sum += b;
    }
  
    // Generate the next Fibonacci number
    return fibonacciSumEven(n - 1, b, a + b, sum);
  }
  
  // Define the number of Fibonacci numbers to generate
  const n = 10; // You can change this to generate more Fibonacci numbers
  
  // Calculate the sum of even Fibonacci numbers
  const result = fibonacciSumEven(n);
  
  console.log(`Sum of the first ${n} even Fibonacci numbers is: ${result}`);
