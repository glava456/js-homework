function calcSumNumbers(n) {
    var sum = 0;
    while (n > 0) {
        sum += n % 10; 
        n = Math.floor(n/10);
    }
    return sum;
}

console.log(calcSumNumbers(123456));