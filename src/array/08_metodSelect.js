function sortSelect(array) {
    for (var i = 0; i < array.length - 1; i++) {
        /* устанавливаем начальное значение минимального индекса */
                let min_i = i;
            /* находим индекс минимального элемента */
            for (var j = i + 1; j < array.length; j++) {
                if (array[j] < array[min_i]) {
                    min_i = j;
                }
            }
            /* меняем значения местами */
            let temp = array[i];
            array[i] = array[min_i];
            array[min_i] = temp;
        }
    return array;
}

module.exports = { sortSelect }
