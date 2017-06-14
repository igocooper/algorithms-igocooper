'use strict'

function bubbleSort(array) {

    var sorted = 0;

    while (sorted !== array.length) {
        sorted = 0;

        for (var i = 0; i < array.length; i++){
            if (array[i+1] < array[i]) {
                var tmp = array[i];

                array[i] = array[i+1];
                array[i+1] = tmp;
            } else {
                sorted = sorted + 1;

            }
        }
    }
    return array;
};

module.exports = bubbleSort;