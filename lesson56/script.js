// 56. (д) Тип данных Symbol
// let id = Symbol("id");

// const obj = {
//     'name': 'Test',
//     [Symbol("id")]: 1,
//     getId: function() {
//         return this[id];
//     }
// };

// // let id = Symbol("id");


// // obj[id] = 1;

// console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);

// for (let value in obj) console.log(value);  // выведет в консоль только "name"

//////////////////////////////////////////////////////////////////

const myAwesomeDB = {
    movies: [],
    actors: [],
    [Symbol.for("id")]: 123
};

// Сторонний код библиотеки

myAwesomeDB.id = '3233525324';

console.log(myAwesomeDB[Symbol.for('id')]);
console.log(myAwesomeDB);