function calcNum(a, b) {
    if (a % 2 == 0) {
        return a * b;
    }
    else { 
        return a + b; 
    }
};

module.exports = { calcNum }