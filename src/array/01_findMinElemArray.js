function findMinElemArray(array){
    let min = array[0];
    for (var i = 0; i < array.length; i++) {
        if (min > array[i]) 
        min = array[i];
    }
    return min;
}

module.exports = { findMinElemArray }
