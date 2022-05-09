// 1. Задача
// Заполните новый массив (result) числами из старого (arr). 
// Колличество элементов в массиве можно получить как arr.length, 
// а к элементм оращаемся все так же: arr[0], arr[1] и т.д. 
// Должен получиться точно такой же масив.

function firstTask() {

    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        result[i] = arr[i];
    }

    console.log(result);
    return result;
}

firstTask();

// 2.Задача
// Измените данный массив так, чтобы все числа были увеличены в 2 раза,
// а если попадется строка - то к ней было добавлено "-done". 
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, `Shopping - done`, 40, `Homework - done` ].

function secondTask() {

    const data = [5, 10, `Shopping`, 20, `Homework`];

    for (let i = 0; i < data.length; i++) {
        if (typeof data[i] === `number`) {
            data[i] = data[i] * 2;
        } else {
            data[i] = data[i] + ` - done`;
        }
    }

    console.log(data);
    return data;
}

secondTask();

// 3.Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
// Должно получиться [ `Homework`, 20, `Shopping`, 10, 5 ]

function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    for (let i = 1; i <= data.length; i++) {
        result[i - 1] = data[data.length - i];
    }

    console.log(result);
    return result;
}

thirdTask();