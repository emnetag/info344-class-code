'use strict';

function add2(num) {
    return new Promise(function (resolve, reject) {
       try {
           resolve(num + 1);
       } catch (ex) {
           reject(ex);
       }
    });
}

var number = 10;

console.log('calling add2 on %d', number);

add2(number)
    .then(function(result) {
        return add2(result);
    })
    .then(function(result) {
        console.log('Result = %d', result);
    })
    .catch(function(err) {
        console.error(err);
    });