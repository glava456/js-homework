function simpleNum(num) {
    if (num <= 1) return false; // отрицательные 
    if (num % 2 == 0 && num > 2) return false; // четные
    const s = Math.sqrt(num); // есть хотя бы один, квадрат которого меньше или равен данному составному числу
    for(let i = 3; i <= s; i += 2) { // цикл нечетных чисел
        if(num % i === 0) return false; //  проверить делимость
    }
    return true;
  }
  module.exports = { simpleNum }