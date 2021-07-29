function findMaxIndexElemArray(array) {
    let max = array[0];
    let imax = 0;
    for (var i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
            imax = i;
        }
    }
    return imax;
}

module.exports = { findMaxIndexElemArray }

