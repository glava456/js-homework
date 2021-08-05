const { findMinElemArray } = require('./src/array/01_findMinElemArray');
const { findMaxElemArray } = require('./src/array/02_findMaxElemArray');
const { findMaxIndexElemArray } = require('./src/array/03_findMaxIndexElemArray');
const { findMinIndexArray } = require('./src/array/04_findMinIndexArray');
const { calcSumOddArray } = require('./src/array/05_calcSumOddArray');
const { reversArray } = require('./src/array/06_reversArray');
const { reversPartArray } = require('./src/array/07_reversPartArray');
const { sortSelect } = require('./src/array/08_metodSelect');
const { getWeekDay } = require('./src/array/09_getWeekDay');
const { calcNum } = require('./src/condition/01_calcNum');
const { pointCoordinate } = require('./src/condition/02_pointCoordinate');
const { sumPositiveNum } = require('./src/condition/03_sumPositiveNum');
const { calcExpression } = require('./src/condition/04_calcExpression');
const { showRating } = require('./src/condition/05_showRating');
const { sumNumb } = require('./src/cycle/01_sumNumb');
const { simpleNum } = require('./src/cycle/02_simpleNum');
const { natureNum } = require('./src/cycle/03_naturNub');
const { calcFactorial } = require('./src/cycle/04_calcFactorial');
const { calcSumNumbers } = require('./src/cycle/05_calcSumNumbers');
const { showRevers } = require('./src/cycle/06_showRevers');

console.log('findMaxElemArray', findMaxElemArray([5, 6, 10, 2, 1, 7]));
console.log('findMinElemArray', findMinElemArray([5, 6, 10, 2, 1, 7]));
console.log('findMaxIndexElemArray', findMaxIndexElemArray ([100, 0, 5, 8, 7, 6, 10, 55555]));
console.log('findMinIndexArray', findMinIndexArray([-2, 5, 6, 10, 2, 1, 7, -100]));
console.log('calcSumOddArray', calcSumOddArray([-2, 5, 6, 10, 2, 1, 7, -100]));
console.log('reversArray',reversArray([-2, 5, 6, 10, 2, 1, 7, -100]));
console.log('reversPartArray', reversPartArray([1, 2, 3, 4, 5, 8, 9, 10, 11]));
console.log('sortSelect', sortSelect([5, 2, 1, 4, 3, 6]));
console.log('getWeekDay' , getWeekDay(4));
console.log('calcNum' , calcNum(2, 5));
console.log ('pointCoordinate', pointCoordinate(-2, 5));
console.log('sumPositiveNum' , sumPositiveNum(-1, 10, 0));
console.log('calcExpression' , calcExpression(1, 10, 50));
console.log( 'showRating' , showRating(100));
console.log('sumNumb', sumNumb(99));
console.log('simpleNum' , simpleNum(97));
console.log('natureNum' , natureNum(97));
console.log('calcFactorial' , calcFactorial(5));
console.log('calcSumNumbers' , calcSumNumbers(123456));
console.log('showRevers' , showRevers(123456));
// const a = ['','']

// const { b,c } = a

// const b = a.b
// const c = a.c

// const [b,c] = a

// const b = a[0]
// const c = a[1]