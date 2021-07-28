function findMinIndexArray(array) {
    let min = array[0];
    let imin = 0;
    for (var i = 0; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i];
            imin = i;
        }
    }
    return imin;
}

console.log(findMinIndexArray([-2, 5, 6, 10, 2, 1, 7, -100]));