'use strict';

function quickSort(array) {

    if (array.length <= 1) {
        return array;
    }

    var pivot = array[array.length-1];

    var left = [];
    var right = [];

    for (var i = 0; i < array.length -1; i++) {
        array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
    }

    return quickSort(left).concat(pivot, quickSort(right));

};

module.exports = quickSort;