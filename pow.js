const pow = (x, n) => {
  // caso mas simple
  if (n === 0) return 1;
  if (n === 1) return x;
  // caso recursivo, hace el problema mas pequeño
  else return x * pow(x, n - 1);
};

console.log(pow(2, 4));
