// Массивы и псевдомассивы

const arr = [13, 32, 23, 16, 99, 2];
arr.sort();  // [ 13, 16, 2, 23, 32, 99 ]  посимвольная сортировка
//arr.sort(compareNum); // [ 2, 13, 16, 23, 32, 99 ] логически правильная сортировка
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

// arr.pop(); // удалить последний элемент массива
// arr.push(11);  // добавить элемент в конец массива
// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// for (let i = 0; i < arr.length; i++) {  // перебор элементоа массива
//     console.log(arr[i]);                
// }

// for (let value of arr) {   // перебор элементоа массива
//     console.log(value);
// }

// const str = prompt("", "");          // сформировали массив, веденных товаров пользевателем
// const products = str.split(", ");
// products.sort();                     // сортировка элементов
// console.log(products.join('; '));