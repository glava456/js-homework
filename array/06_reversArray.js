function reversArray(array) {
    const arrayRevers = new Array();
    var last_index = array.length - 1;
    for (i = 0; i < array.length; i++) {
        arrayRevers.push (array[last_index]);
        last_index = last_index-1;
    }
    return arrayRevers;
}

console.log(reversArray([-2, 5, 6, 10, 2, 1, 7, -100]));