// Объекты, деструктуризация объектов (ES6)

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("Test");
    }
};

options.makeTest();

// Деструктуризация объектов
const {border, bg} = options.colors;
console.log(border);


console.log(Object.keys(options).length);  //счетчик свойств

// console.log(options["colors"]["border"]);

// console.log(options.name);

// delete options.name;

// console.log(options);

let counter = 0;
for (let key in options) {
    if (typeof (options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;  //счетчик свойств
    }
}

console.log(counter);
