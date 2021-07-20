function calcFactorial(n) {
    var total = 1;
    for (i = 0; i < n; i++){
        total = total * (n - i);
    }
    return total;
  }
console.log(calcFactorial(5));
