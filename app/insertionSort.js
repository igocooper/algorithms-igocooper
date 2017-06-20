'use strict';


function insertionSort(array) {
    if (!array.length) return [];

    var arraySorted = [ array[0] ];


    function insert(element,index , arr) {
        for (var i = arr.length -1; i >= index; i--) {
            arr[i+1] = arr[i];
        }
        arr[index] = element;
        return arr
    }

    for (var i = 1; i < array.length; i++) {

        var tmp = arraySorted.length;

        for( var j = 0; j < i; j++){

            if (array[i] <= arraySorted[j]) {
                insert(array[i], j , arraySorted);
                break;
            }

        }

        if (arraySorted.length == tmp) {
            arraySorted[arraySorted.length] = array[i];
        }
    }

    return arraySorted;
};



module.exports = insertionSort;