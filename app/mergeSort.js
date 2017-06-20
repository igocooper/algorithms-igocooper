'use strict';

function mergeSort(array) {

    function comparator(a,b){
        return a < b;
    }

    function merge(left,right){
        var merged = [];

        while ( left.length && right.length) {

            if ( comparator(left[0] , right[0]) ){
                merged.push( left.shift() );
            }else {
                merged.push( right.shift() );
            }
        }

        while ( left.length ) {
            merged.push( left.shift() );
        }

        while ( right.length ) {
            merged.push( right.shift() );
        }

        return merged;
    }

    if ( array.length < 2){
        return array;
    }

    var middle = Math.floor( array.length /2),
        leftPart = array.slice(0,middle),
        rightPart = array.slice(middle);

    return merge(mergeSort(leftPart), mergeSort(rightPart));

};

module.exports = mergeSort;