console.log(fibo(10));


// n es la cantidad de secuencias de fibonacci
// a es el numero actual fib1 = 0
// b es el numero seiguiente fib2 = 1
// a se vuelve b y b es la suma de dos numeros consecutivos.
function fibo(n, a = 0, b = 1){
    if (n === 0) {
        return b;
    }
    else {
        return fibo(n - 1, b, a + b)
    }
}