'use strict';

const algorithms = require('../index.js');

function makeTest( el, array) {
       return it('Should return ' + el , function(){
           let foundAt = algorithms.binarySearch(array , el);

           foundAt.should.be.eql(array.indexOf(el));
    });

}


describe('binarySearch', function(){

   describe('Should return index of the target value in array', function(){
       var checks = [47, 53, 59 ,71 ,97, 111, 243 , 23 ,41],
           checkArray = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43,
               47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];


       for (var i =0 ; i < checks.length; i++) {
           makeTest( checks[i] , checkArray);
       }

   });

    it('Should return -1  if there is NO target value in array', function(){
        let foundAt = algorithms.binarySearch([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43,
            47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97], 111);

        foundAt.should.be.eql(-1);
    });

    it('Should return -1  if array is empty', function(){
        let foundAt = algorithms.binarySearch([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43,
            47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97], 111);

        foundAt.should.be.eql(-1);
    });


});
