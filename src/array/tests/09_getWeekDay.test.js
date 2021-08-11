const {getWeekDay} = require('../09_getWeekDay');

test('getWeekDay_1', () => {
    expect(getWeekDay(1)).toBe('Понедельник');
});

test('getWeekDay_2', () => {
    expect(getWeekDay(2)).toBe('Вторник');
});

test('getWeekDay_3', () => {
    expect(getWeekDay(3)).toBe('Среда');
});

test('getWeekDay_4', () => {
    expect(getWeekDay(4)).toBe('Четверг');
});

test('getWeekDay_5', () => {
    expect(getWeekDay(5)).toBe('Пятница');
});

test('getWeekDay_6', () => {
    expect(getWeekDay(6)).toBe('Суббота');
});

test('getWeekDay_7', () => {
    expect(getWeekDay(7)).toBe('Воскресенье');
});

test('getWeekDay_default', () => {
    expect(getWeekDay(89)).toBe('Нет таких значений');
});
