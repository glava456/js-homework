function sumPositiveNum(a, b, c) {
    if (a < 0){
        a = 0;
    }
    if (b < 0){
        b = 0;
    }
    if (c < 0){
        c = 0;
    }
    return a + b + c;
}

let sum = sumPositiveNum(-1, 10, 0);
console.log(sum);