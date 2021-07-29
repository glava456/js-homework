function calcSumOddArray(array) {
    let odd_sum = 0;
    for (var i = 0; i < array.length; i++) {
        if (i % 2 != 0) {
            odd_sum += array[i];
        }
    }
    return odd_sum;
}

module.exports = { calcSumOddArray }
