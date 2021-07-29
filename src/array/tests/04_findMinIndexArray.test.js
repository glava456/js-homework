const {findMinIndexArray} = require('../04_findMinIndexArray');

test('MinIndexArray', () => {
    expect(findMinIndexArray([-2, 5, 6, 10, 2, 1, 7, -100])).toBe(7);
});