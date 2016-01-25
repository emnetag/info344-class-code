'use strict';

var name = 'Emnet';

function getHello(name) {
    return function() {
        console.log(name);
    }
}

var sayHello = getHello(name);
name = 'Fred';
sayHello();