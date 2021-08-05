const {calcFactorial} = require('../04_calcFactorial');

test('calcFactorial', () => {
    expect(calcFactorial(5)).toBe(120);
});