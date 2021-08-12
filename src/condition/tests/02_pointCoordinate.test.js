const {pointCoordinate} = require('../02_pointCoordinate');

test('pointCoordinate_1', () => {
    expect(pointCoordinate(2, 5)).toBe('точка принадлежит первой четверти');
});

test('pointCoordinate_2', () => {
    expect(pointCoordinate(-2, 5)).toBe('точка принадлежит второй четверти');
});

test('pointCoordinate_0', () => {
    expect(pointCoordinate(0, 0)).toBe('введите значение, которое не равно 0');
});

test('pointCoordinate_3', () => {
    expect(pointCoordinate(-2, -5)).toBe('принадлежит третьей координатной четверти');
});

test('pointCoordinate_3', () => {
    expect(pointCoordinate(2, -5)).toBe('принадлежит четвертой координатной четверти');
});