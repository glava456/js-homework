const {calcExpression} = require('../04_calcExpression');

test('calcExpression', () => {
    expect(calcExpression(1, 10, 50)).toBe(503);
});