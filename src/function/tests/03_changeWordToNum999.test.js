const {changeWordToNum} = require('../03_changeWordToNum999');

test('changeWordToNum', () => {
    expect(changeWordToNum('девятьсот девяносто девять')).toBe(999);
});

test('changeWordToNum_1-9', () => {
    expect(changeWordToNum('девять')).toBe(9);
});

test('changeWordToNum_11-19', () => {
    expect(changeWordToNum('пятнадцать')).toBe(15);
});

test('changeWordToNum_915', () => {
    expect(changeWordToNum('девятьсот пятнадцать')).toBe(915);
});

test('changeWordToNum_905', () => {
    expect(changeWordToNum('девятьсот пять')).toBe(905);
});

test('changeWordToNum_925', () => {
    expect(changeWordToNum('девятьсот двадцать пять')).toBe(925);
});

test('changeWordToNum_900', () => {
    expect(changeWordToNum('девятьсот')).toBe(900);
});


test('changeWordToNum_80', () => {
    expect(changeWordToNum('восемьдесят')).toBe(80);
});

test('changeWordToNum_0', () => {
    expect(changeWordToNum('ноль')).toBe(0);
});

// test('changeWordToNum_85', () => {
//     expect(changeWordToNum('восемьдесят пять')).toBe(85);
// });