// Напишите функцию, которая принимает в себя 4 числа и возвращает самое большое из них. 
// Если один из аргументов не является числом - возвращается 0. Дробные числа разрешены. 

// У этой задачи есть очень много вариантов решения, в том числе и встроенное в JS. Подходит любое :)

// Пример:
// findMaxNumber(1, 5, 6.6, 11) => 11
// findMaxNumber(1, 5, '6', '10') => 0


function findMaxNumber(a, b, c, d) {
    if (typeof (a) !== 'number' ||
        typeof (b) !== 'number' ||
        typeof (c) !== 'number' ||
        typeof (d) !== 'number') {
        return 0;
    } else {
        return Math.max(a, b, c, d);
    }
}

console.log(findMaxNumber(0.1, 222, 11, -4));