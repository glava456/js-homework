const {sortSelect} = require('../08_metodSelect');

test('sortSelect', () => {
    expect(sortSelect([5, 2, 1, 4, 3, 6])).toEqual([1, 2, 3, 4, 5, 6]);
});