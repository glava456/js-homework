const {reversArray} = require('../06_reversArray');

test('reversArray', () => {
    expect(reversArray([-2, 5, 6, 10, 2, 1, 7, -100])).toEqual([-100, 7, 1,  2, 10, 6, 5, -2]);
});

