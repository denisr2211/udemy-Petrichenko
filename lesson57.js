// 57. (д) Дескрипторы свойств и полезные методы объектов

const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
};
Object.defineProperty(user, 'birthday', {writable: false});

console.log(Object.getOwnPropertyDescriptor(user, 'birthday')); // {value: '20/04/1993', writable: false, enumerable: true, configurable: true}

// console.log(Object.getOwnPropertyDescriptor(user, 'name'));  // {value: 'Alex', writable: true, enumerable: true, configurable: true}

Object.defineProperty(user, 'name', {writable: false});
// Object.defineProperty(user, 'gender', {value: 'male'});
// console.log(Object.getOwnPropertyDescriptor(user, 'gender'));  // {value: 'male', writable: false, enumerable: false, configurable: false}

       // 3-и флага
// writable
// enumerable
// configurable

//////////////////////////////////////////////////////////////////////////
// Object.entries();
var obj = { foo: "bar", baz: 42 };
console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]

// массив как объект
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.entries(obj)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

// массив как объект c random сортировкой ключей
var an_obj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.entries(an_obj)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]


/////////////////////////////////////////////////////////////////////////
//   Object.values();
  const object2 = {
    a: 'somestring',
    b: 42,
    c: false
  };
  
  console.log(Object.values(object2));
  // expected output: Array ["somestring", 42, false]

/////////////////////////////////////////////////////////////////////////
//   Object.keys();
var arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); // консоль: ['0', '1', '2']

// Массивоподобный объект
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj)); // консоль: ['0', '1', '2']

// Массивоподобный объект со случайным порядком ключей
var an_obj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(an_obj)); // консоль: ['2', '7', '100']