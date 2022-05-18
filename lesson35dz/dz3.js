// ЗАДАЧИ НА РАБОТУ С МАССИВОМ, часть 2

// 3. Задача с собеседований. Напишите функцию reverse, которая принимает в себя строку 
// и возвращает эту строку в обратном порядке. 
// Пример:
// const someString = 'This is some strange string';
// reverse(someString) => 'gnirts egnarts emos si sihT'
// Функцию можно применить к любой строке. Если в функцию приходит не строка - вернуть
// сообщение "Ошибка!"

// 4. Представьте такую реальную ситуацию. У вас естьбанкомат, который выдает деньги 
// издвух разных банкоматов в разных валютах. Один банк основной с базовыми валютами, 
// второй дополнительный с прочими валютами:
//     const baseCurrencies = ['USD', 'EUR'];
//     const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
// Вам нужно создать главную функцию банкомата availableCurr, которая принимает два 
// аргумента: первый - это массив со всеми доступными валютами из дву банков сразу (сейчас 
// представим, что они не могут повторяться), второй - необязательнй аргумент, который 
// указывает ту валюту, которая сейчас закончилась в банкомате. если массив в первом
// аргументе пустой - то функция возвращает строку 'Нет доступных валют'. Функция возвращает 
// строку в нужном виде.
// Пример:
//     availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')
// Вернет строку:
//     Доступные валюты:
//     UAH
//     RUB
// Заметьте:
// -CNY(юань) исчез из списка валют, значит такая валюта закончилась
// -После валюты: стоит перенос строки \n, и после каждой валюты тоже. Это важно для тестов
// -Данные для первого аргумента должны приходить сразу из двух банков, причем сначала
// baseCurrencies, потом additionalCurrencies по порядку. 

const someString = 'This is some strange string';

function reverse(str) {
    if (typeof(str) !== 'string') {
        return "Ошибка!";
    }
    // Самый оптимальный вариант решения
    return str.split('').reverse().join('');

    // Решение при помощи цикла
    // let newStr = '';
    // for (let i = str.length - 1; i >= 0; i--) {
    //     newStr += str[i];
    // }
    // return newStr
}

console .log(reverse(someString));

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = '';
    arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

    arr.forEach(function(curr, i) {
        if (curr !== missingCurr) {
            str += `${curr}\n`;
        }
    });

    // Или
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === missingCurr) {
    //         continue;
    //     }
    //     str += `${arr[i]}\n`;
    // }

    return str;
}

console .log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'));