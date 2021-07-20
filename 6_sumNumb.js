function sumNumb(numb) {
    var amount = 0;
    var sum = 0;
    for (let i = 0; i <= numb; i++) {
        if (i % 2 == 0) {
            amount++;
            sum += i;
        }
    }
    console.log(sum);
    console.log(amount);
}

sumNumb(99);