const {calcSumNumbers} = require('../05_calcSumNumbers');

test('calcSumNumbers', () => {
    expect(calcSumNumbers(123456)).toBe(21);
});