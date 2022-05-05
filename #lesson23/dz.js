function firstTask() {
    for (let i = 5; i < 11; i++) {
        console.log(i);
    }   
}

firstTask();



function secondTask() {
    for (let i = 20; i > 9; i--) {
        console.log(i);
        if (i === 14) break;
    } 
}

secondTask();



function thirdTask() {
    for (let i = 2; i <= 10; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}

thirdTask();


function fourthTask() {
    let i = 2;
    while (i < 16) {
        i++;
        if (i % 2) {
            console.log(i);
        }
    }
}

fourthTask();



function fifthTask() {
    let arrayOfNumbers = [];

    for (let i = 5; i <= 10; i++) {
        arrayOfNumbers[i - 5] = i;
    }

    console.log(arrayOfNumbers);
    return arrayOfNumbers;
}

fifthTask();
