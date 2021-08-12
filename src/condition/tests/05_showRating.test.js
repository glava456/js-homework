const {showRating} = require('../05_showRating');

test('showRating_A', () => {
    expect(showRating(100)).toBe("A");
});

test('showRating_B', () => {
    expect(showRating(76)).toBe("B");
});

test('showRating_C', () => {
    expect(showRating(61)).toBe("C");
});

test('showRating_D', () => {
    expect(showRating(41)).toBe("D");
});

test('showRating_E', () => {
    expect(showRating(21)).toBe("E");
});

test('showRating_F', () => {
    expect(showRating(0)).toBe("F");
});

test('showRating', () => {
    expect(showRating('jksxxnc')).toBe("Неверный тип данных");
});

test('showRating_minus', () => {
    expect(showRating(-1)).toBe("неверное значение");
});

test('showRating_more100', () => {
    expect(showRating(120)).toBe("неверное значение");
});