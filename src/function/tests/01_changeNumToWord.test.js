const {changeNumToWord} = require('../01_changeNumToWord');

test('changeNumToWord_0', () => {
    expect(changeNumToWord(0)).toBe('ноль');
});

test('changeNumToWord', () => {
    expect(changeNumToWord(999)).toBe('девятьсот девяносто девять');
});

test('changeNumToWord_11-19', () => {
    expect(changeNumToWord(11)).toBe('одиннадцать');
});

