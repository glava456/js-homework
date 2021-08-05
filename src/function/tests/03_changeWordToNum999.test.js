const {changeWordToNum} = require('../03_changeWordToNum999');

test('changeWordToNum', () => {
    expect(changeWordToNum('девятьсот девяносто девять')).toBe(999);
});