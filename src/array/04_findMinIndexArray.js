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

module.exports = { findMinIndexArray }

