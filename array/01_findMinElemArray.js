function findMinElemArray(array){
    var min = array[0];
    for (var i = 0; i < array.length; i++) {
        if (min > array[i]) 
        min = array[i];
    }
    return min;
}

console.log(findMinElemArray([5, 6, 10, 2, 1, 7]));