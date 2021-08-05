const {changeNumToWord} = require('../01_changeNumToWord');

test('changeNumToWord', () => {
    expect(changeNumToWord(999)).toBe('девятьсот девяносто девять');
});