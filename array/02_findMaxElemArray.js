function findMaxElemArray(array){
    let max = array[0];
    for (var i = 0; i < array.length; i++) {
        if (max < array[i]) 
        max = array[i];
    }
    return max;
}

console.log(findMaxElemArray([5, 6, 10, 2, 1, 7]));