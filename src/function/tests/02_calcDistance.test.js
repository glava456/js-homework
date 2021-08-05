const {calcDistance} = require('../02_calcDistance');

test('calcDistance', () => {
    expect(calcDistance(3, 5, -2, -108)).toBe(113.11056537742175);
});