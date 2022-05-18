// ЗАДАЧИ НА РАБОТУ С МАССИВАМИ

// 1. Напишите функцию showFamily, которая будет принимать в себя масси строк 
// и возвращать сообщение в нужном формате. 
// showFamily(family) => 'Семья состоит из: Peter Ann Alex Linda'
// Имена подставляются автоматически из массива. Если массив пустой, 
// то выводится сообщение 'Семья пуста'

// 2. Напишите функцию standardizeStrings, которая будет принимать в себя масси 
// строк и будет выводить в консоль эти строки в нижнем регистре. 
// Пример:
// standardizeStrings(favoriteCities) выведет в консоль
//     lisbon
//     rome 
//     milan 
//     dublin 
// Это частая задача в реальности, так как от пользователя нам могут прийти 
// ответы в самых разных форматах. В том числе и с разными буквами :) Поэтому
// нам нужно привести строки в один формат для правильной работы. 

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let str = '';

    arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';

    arr.forEach(member => {
        str += `${member} `;
    });

    return str;
}

console.log(showFamily(family));

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(city => {
        console.log(city.toLowerCase());
    });
}

console.log(standardizeStrings(favoriteCities));
