const {calcNum} = require('../01_calcNum');

test('calcNum', () => {
    expect(calcNum(2, 5)).toBe(10);
});

test('calcNum_odd', () => {
    expect(calcNum(3, 3)).toBe(6);
});