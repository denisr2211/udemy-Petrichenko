// Проверяется именно переменная result, формируйте строку в ней
// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {

//     for (let j = 0; j < i; j++) {
//         result += '*';
//     }
//     result += '\n';
// }
// console.log(result);


const lines = 7;
let result = '';

for (let i = 1; i <= lines; i++) {

    for (let j = 0; j < lines - i; j++) {
            result += ' ';
    }

    for (let j = 0; j < 2 * i - 1; j++) {
        result += '*'; 
    }
    result += '\n';
}

console.log(result);

//       *
//      ***
//     *****
//    *******
//   *********
//  ***********
// *************