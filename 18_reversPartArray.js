function reversArray(array) {
    var mid_index = array.length / 2;
    console.log(mid_index);
    for (i = 0; i < array.length; i++) {
        if (i > mid_index) {
            array[i] = array[mid_index + 1]; // индекс 3,4,5
        }
        else {
            array[i] = array[mid_index + i]; // индекс 0,
        }
    }
    return array;
}

console.log(reversArray([1, 2, 3, 4, 5, 6]));