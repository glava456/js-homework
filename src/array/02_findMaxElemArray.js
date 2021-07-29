function findMaxElemArray(array){
    let max = array[0];
    for (var i = 0; i < array.length; i++) {
        if (max < array[i]) 
        max = array[i];
    }
    return max;
}

module.exports = { findMaxElemArray }

