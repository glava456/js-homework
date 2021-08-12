const {findMinElemArray} = require('../01_findMinElemArray');

test('findMinElem', () => {
    expect(findMinElemArray([1, 2])).toBe(1);
});

test('findMinElem_1', () => {
    expect(findMinElemArray([2, 1])).toBe(1);
});