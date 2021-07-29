const { findMinElemArray } = require('./array/01_findMinElemArray');
const { findMaxElemArray } = require('./array/02_findMaxElemArray');
const { findMaxIndexElemArray } = require('./array/03_findMaxIndexArray');
const { findMinIndexArray } = require('./array/04_findMinIndexArray');

console.log('findMaxElemArray', findMaxElemArray([5, 6, 10, 2, 1, 7]));
console.log('findMinElemArray', findMinElemArray([5, 6, 10, 2, 1, 7]));
console.log('findMaxIndexElemArray', findMaxIndexElemArray ([100, 0, 5, 8, 7, 6, 10, 55555]));
console.log('findMinIndexArray', findMinIndexArray([-2, 5, 6, 10, 2, 1, 7, -100]));

// const a = ['','']

// const { b,c } = a

// const b = a.b
// const c = a.c

// const [b,c] = a

// const b = a[0]
// const c = a[1]
