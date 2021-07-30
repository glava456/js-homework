const { findMinElemArray } = require('./src/array/01_findMinElemArray');
const { findMaxElemArray } = require('./src/array/02_findMaxElemArray');
const { findMaxIndexElemArray } = require('./src/array/03_findMaxIndexElemArray');
const { findMinIndexArray } = require('./src/array/04_findMinIndexArray');
const { calcSumOddArray } = require('./src/array/05_calcSumOddArray');
const { reversArray } = require('./src/array/06_reversArray');
const { reversPartArray } = require('./src/array/07_reversPartArray');
const { sortSelect } = require('./src/array/08_metodSelect');

console.log('findMaxElemArray', findMaxElemArray([5, 6, 10, 2, 1, 7]));
console.log('findMinElemArray', findMinElemArray([5, 6, 10, 2, 1, 7]));
console.log('findMaxIndexElemArray', findMaxIndexElemArray ([100, 0, 5, 8, 7, 6, 10, 55555]));
console.log('findMinIndexArray', findMinIndexArray([-2, 5, 6, 10, 2, 1, 7, -100]));
console.log('calcSumOddArray', calcSumOddArray([-2, 5, 6, 10, 2, 1, 7, -100]));
console.log('reversArray',reversArray([-2, 5, 6, 10, 2, 1, 7, -100]));
console.log('reversPartArray', reversPartArray([1, 2, 3, 4, 5, 8, 9, 10, 11]));
console.log('sortSelect', sortSelect([5, 2, 1, 4, 3, 6]));

// const a = ['','']

// const { b,c } = a

// const b = a.b
// const c = a.c

// const [b,c] = a

// const b = a[0]
// const c = a[1]
