// 40. Замыкание и лексическое окружение

// let number = 5;

// function logNumber() {
//     console.log(number);
// }

// number = 6;

// logNumber(); // 6

// number = 9;

// logNumber();

function createCounter() {
    let counter = 0;

    const myFunction = function() {
        counter = counter + 1;
        return counter;
    };

    return myFunction;
}

const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1, c2, c3);  // 1 2 3



function foo(a,b) {
    const [first] = a;
    const {eng} = b;
 
    return `${first} ${eng}`;
}
 
const result = foo(['Hello', 'Привет'], {ru: 'Мир', eng: 'World'});
console.log(result);