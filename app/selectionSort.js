'use strict';

function selectionSort(array) {

    let isSorted = false;

    while (!isSorted ) {
        isSorted = true;

        for (var i =0; i < array.length; i++) {
            var item = array[i];

            for( var j = i; j < array.length; j++){
                if ( item > array[j]) {
                    isSorted = false;

                    var tmp = array[i];
                    array[i] = array[j];
                    array[j] = tmp;
                    break;
                }
            }
        }


    }
    return array
};


module.exports = selectionSort;