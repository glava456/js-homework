const {pointCoordinate} = require('../02_pointCoordinate');

test('pointCoordinate', () => {
    expect(pointCoordinate(-2, 5)).toBe('точка принадлежит второй четверти');
});