function calcSumOddArray(array) {
    let odd_sum = 0;
    for (var i = 0; i < array.length; i++) {
        if (i % 2 != 0) {
            odd_sum += array[i];
        }
    }
    return odd_sum;
}

console.log(calcSumOddArray([-2, 5, 6, 10, 2, 1, 7, -100]));