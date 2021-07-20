function natureNum(num) {
    if (num >= 1) {
        var root = Math.round(Math.sqrt(num));
    }
    return root;
  }
console.log(natureNum(97));

// //Отрицательные и нецелые числа к натуральным не относят. 
// Суть бинарного поиска - изначально отсортивать значение согласно условиям задачи