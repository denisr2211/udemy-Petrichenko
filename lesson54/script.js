// 54. (д) Оператор опциональной цепочки (?.) ES11

const box = document.querySelector('.box');
const block = document.querySelector('.block');

console.log(block);

// if (block) {               // логическое преобразование
//     console.log(block.textContent);
// }

// console.log(block?.textContent);

// console.log(1 + 2);

const userData = {
    name: 'Ivan',
    age: null,
    say: function() {
        console.log('Hello');
    }
};

userData.say();
userData.hey?.();   // hey не существует и код отработал дальш не вывал ошибку
// if (userData && userData.skills && userData.skills.js) {
//     console.log(userData.skills.js);
// }

console.log(userData.skills?.js);  //  !!! избавляемся от лишнего кода

