const {sortSelect} = require('../08_metodSelect');

test('metodSelect', () => {
    expect([5, 2, 1, 4, 3, 6]).toEqual(expect.arrayContaining([ 1, 2, 3, 4, 5, 6]));
});