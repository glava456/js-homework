const {reversPartArray} = require('../07_reversPartArray');

test('reversPartArray_odd', () => {
    expect(reversPartArray([1, 2, 3, 4, 5, 8, 9, 10, 11])).toEqual([8, 9, 10, 11, 5, 1, 2, 3, 4]);
});

test('reversPartArray', () => {
    expect(reversPartArray([1, 2, 3, 4, 5, 8, 9, 10])).toEqual([5, 8, 9, 10,
        1, 2, 3, 4]);
});