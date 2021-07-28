function findMaxElemArray(array) {
    var max = array[0];
    var imax = 0;
    for (var i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
            imax = i;
        }
    }
    return imax;
}

console.log(findMaxElemArray([100, 0, 5, 8, 7, 6, 10, 55555]));