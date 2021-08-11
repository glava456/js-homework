const {reversPartArray} = require('../07_reversPartArray');

test('reversPartArray_odd', () => {
    expect([1, 2, 3, 4, 5, 8, 9, 10, 11]).toEqual(expect.arrayContaining([8, 9, 10, 11, 5, 1, 2, 3, 4]));
});

test('reversPartArray', () => {
    expect([1, 2, 3, 4, 5, 8, 9, 10]).toEqual(expect.arrayContaining([5, 8, 9, 10,
        1, 2, 3, 4]));
});