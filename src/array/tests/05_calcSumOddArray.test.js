const {calcSumOddArray} = require('../05_calcSumOddArray');

test('MinIndexArray', () => {
    expect(calcSumOddArray([-2, 5, 6, 10, 2, 1, 7, -100])).toBe(-84);
});