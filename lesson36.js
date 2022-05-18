// 36. Основы ООП, прототипно-ориентированное наследование

let str = "some";
let strObj = new String(str);

// console.log(typeof(str));    // string
// console.log(typeof(strObj)); // object

console.log([1, 2, 3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("Hello");
    }
};

const jonh = Object.create(soldier);

// const jonh = {
//     health: 100
// };

//jonh.__proto__ = soldier;  // устаревший метод

// Object.setPrototypeOf(jonh, soldier);

// console.log(jonh.armor);
jonh.sayHello();
