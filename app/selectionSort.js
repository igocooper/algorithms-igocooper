'use strict';


function selectionSort(array) {

    for (var i =0; i < array.length; i++) {
        var lowest = array[i],
            lowestIndex = i;

        for( var j = i; j < array.length; j++){

            if (array[j] < lowest) {
                lowest = array[j];
                lowestIndex = j;
            }
        }

        array[lowestIndex] = array[i];
        array[i] = lowest;
    }
    return array
};


module.exports = selectionSort;