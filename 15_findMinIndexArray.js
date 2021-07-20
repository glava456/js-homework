function findMinIndexArray(array) {
    var min = array[0];
    var imin = 0;
    for (i = 0; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i];
            imin = i;
        }
    }
    return imin;
}

console.log(findMinIndexArray([-2, 5, 6, 10, 2, 1, 7, -100]));