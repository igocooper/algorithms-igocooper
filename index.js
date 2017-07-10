'use strict';

let bubbleSort = require('./app/bubbleSort');
let selectionSort = require('./app/selectionSort.js');
let insertionSort = require('./app/insertionSort.js');
let binarySearch = require('./app/binarySearch.js');
let mergeSort = require('./app/mergeSort.js');
let quickSort = require('./app/quickSort.js');

let algorithms = {
    bubbleSort,
    selectionSort,
    binarySearch,
    insertionSort,
    mergeSort,
    quickSort

};


module.exports = algorithms;