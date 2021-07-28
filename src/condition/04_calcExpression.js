// function calcExpression(a, b, c) {
//     let sum = a + b + c;
//     let mult = a*b*c;
//     let d = Math.max(sum, mult) + 3;
//     return d;
// }

function calcExpression(a, b, c) {
    return Math.max((a + b + c), (a * b * c)) + 3;
}
console.log(calcExpression(1, 10, 50));