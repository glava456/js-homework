const {sumPositiveNum} = require('../03_sumPositiveNum');

test('sumPositiveNum', () => {
    expect(sumPositiveNum(-1, 10, 0)).toBe(10);
});