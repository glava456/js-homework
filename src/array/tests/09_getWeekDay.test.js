const {getWeekDay} = require('../09_getWeekDay');

test('getWeekDay', () => {
    expect(getWeekDay(4)).toBe('Четверг');
});