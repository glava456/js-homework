const {findMaxIndexElemArray} = require('../03_findMaxIndexElemArray');

test('findMaxIndexElemArray', () => {
    expect(findMaxIndexElemArray([100, 0, 5, 8, 7, 6, 10, 55555])).toBe(7);
});