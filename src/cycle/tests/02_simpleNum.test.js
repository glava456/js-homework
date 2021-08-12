const {simpleNum} = require('../02_simpleNum');

test('simpleNum', () => {
    expect(simpleNum(97)).toBe(true);
});

test('simpleNum_minus', () => {
    expect(simpleNum(-97)).toBe(false);
});

test('simpleNum_even', () => {
    expect(simpleNum(96)).toBe(false);
});

test('simpleNum_sqrt', () => {
    expect(simpleNum(25)).toBe(false);
});