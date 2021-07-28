function natureNum(num) {
  let root;
  if (num >= 1) {
    root = Math.round(Math.sqrt(num));
  }
  return root;
}
console.log(natureNum(97));

// Отрицательные и нецелые числа к натуральным не относят. 
// Суть бинарного поиска - изначально отсортивать значение согласно условиям задачи