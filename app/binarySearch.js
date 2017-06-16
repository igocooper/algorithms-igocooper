'use strict';


function binarySearch(array, targetValue) {

    var min = 0;
    var max = array.length - 1;
    var guess;

    while(max >= min) {

        guess = Math.floor( (min + max)/2 );



        if (array[guess] == targetValue) {
            return guess;
        }else if(array[guess] < targetValue) {
            min = guess + 1 ;
        }else {
            max = guess -1;
        }
    }

    return -1;
};


module.exports = binarySearch;