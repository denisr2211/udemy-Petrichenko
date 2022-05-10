// Место для первой задачи
function sayHello(name) {
    return "Привет, " + name + "!";
}

console.log(sayHello("Rex"));


// Место для второй задачи
function returnNeighboringNumbers(num) {
    return [num - 1, num, num + 1];
}

console.log(returnNeighboringNumbers(7));


// Место для третьей задачи
function getMathResult(num, mult) {
    if (typeof (mult) !== 'number' || mult <= 0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= mult; i++) {
        if (i === mult) {
            str += `${num * i}`;
        } else {
            str += `${num * i}---`;
            // str = str + num * i + "---"
        }
    }
    return str;
}

console.log(getMathResult(2, 7));