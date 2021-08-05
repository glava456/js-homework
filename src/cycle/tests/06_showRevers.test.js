const {showRevers} = require('../06_showRevers');

test('showRevers', () => {
    expect(showRevers(123456)).toBe(654321);
});