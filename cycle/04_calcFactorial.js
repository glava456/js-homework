function calcFactorial(n) {
  let total = 1;
  for (var i = 0; i < n; i++) {
    total = total * (n - i);
  }
  return total;
}
console.log(calcFactorial(5));
