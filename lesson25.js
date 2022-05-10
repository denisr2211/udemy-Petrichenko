"use strict";

let num = 20;

function showFirstMassage (text) {
    console.log(text);
    console.log(num);
}

showFirstMassage("Hello Elena");
console.log(num);

////////////////////////////////////////////////

function calc(a, b) {
    return(a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(1, 21));

///////////////////////////////////////////////

function ret() {
    let num = 50;

    //


    return num;
}

const anotherNum = ret();
console.log(anotherNum);

/////////////////////////////////////////////////

const logger = function() {
    console.log("Hello")
};

logger();

/////////////////////////////////////////////////

const calc2 = (a, b) => {
    console.log('1');
    return a + b;
};