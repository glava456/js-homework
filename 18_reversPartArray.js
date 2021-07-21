// не стреляйте в пианиста, он играет как умеет!!)))))
function reversArray(array) {
    const newArray = [];

    for (i = 0; i < array.length; i++) {

        if (array.length % 2 == 0) {
            /* устанавливаем начальное значение среднего индекса */
            let mid_i = array.length / 2;
            if (i > mid_i) {
                for (j = 0; j < mid_i; j++) {
                    let after = array[j];
                    newArray[mid_i + j] = after;
                }
            }
            if (i < mid_i) {
                let before = array[mid_i + i];
                newArray[i] = before;
            }
        }
        else {
            let mid_odd_i = Math.round(array.length / 2);
            if (i == mid_odd_i) {
                newArray[mid_odd_i-1] = array[i-1];
            }
            if (i > mid_odd_i) {
                for (j = 0; j < mid_odd_i - 1; j++) {
                    let after_odd = array[j];
                    newArray[mid_odd_i + j] = after_odd;
                }
            }
            if (i < mid_odd_i) {
                let before_odd = array[mid_odd_i + i];
                newArray[i] = before_odd;
            }
        }
    }
    return newArray;
}

console.log(reversArray([1, 2, 3, 4, 5, 8, 9, 10, 11]));