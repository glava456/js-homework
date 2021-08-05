function sumNumb(numb) {
    let sum = 0;
    for (var i = 0; i <= numb; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}

module.exports = { sumNumb }