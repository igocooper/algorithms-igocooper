'use strict';

const algorithms = require('../index.js');

describe('mergeSort', function(){

   it('Should return empty array, in case empty array is passed as an argument', function(){
       let sorted = algorithms.mergeSort([]);

       sorted.should.be.eql([]);

   });

    it('Should return sorted array in case sorted array was passed', function(){
        let randomArr = [ 1, 2, 3, 4, 5, 6, 7, 8 ];

        let sorted = algorithms.mergeSort(randomArr);

        sorted.should.be.eql([ 1,2,3,4,5,6,7,8 ]);
    });

    it('Should return sorted array in case not sorted array was passed', function(){
        let randomArr = [ 7,2,4,5,1,6,8,3 ];

        let sorted = algorithms.mergeSort(randomArr);

        sorted.should.be.eql([ 1,2,3,4,5,6,7,8 ]);
    });

    it("Should return sorted array in case  array passed as an argument consist of not serial numbers ", function(){
        let randomArr = [15, 96, 23, 67, 110, 45, 24, 1024, 26];

        let sorted = algorithms.mergeSort(randomArr);

        sorted.should.be.eql([15,23,24,26,45,67,96,110,1024]);
    });

    it("Should return sorted array containing dups ", function(){
        let randomArr = [ 14, 13, 13, 6, 7 ,99];

        let sorted = algorithms.mergeSort(randomArr);

        sorted.should.be.eql([6, 7, 13, 13, 14, 99]);
    });

});
