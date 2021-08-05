const {showRating} = require('../05_showRating');

test('showRating', () => {
    expect(showRating(100)).toBe("A");
});