// 55. (д) Живые коллекции и полезные методы

const boxesQuery = document.querySelectorAll('.box');
const boxesGet =document.getElementsByClassName('box');

// как найти лемент, который среди прочих содержит определенный css селлектор ( <div class="box this"></div>)
boxesQuery.forEach(box => {
    if (box.matches('.this')) console.log(box);
});

console.log(boxesQuery[0].closest('.wrapper'));


// boxesQuery[0].remove();
// boxesGet[0].remove();

// for (let i = 0; i < 5; i++) {
//     const div = document.createElement('div');
//     div.classList.add('box');
//     document.body.append(div);
// }
 
// console.log(boxesQuery);   // неживые коллекции

// NodeList(3)
    // 0: div.box
    // 1: div.box
    // 2: div.box
    // length: 3
    // [[Prototype]]: NodeList
        // entries: ƒ entries()
        // forEach: ƒ forEach()
        // item: ƒ item()
        // keys: ƒ keys()
        // length: (…)
        // values: ƒ values()
        // constructor: ƒ NodeList()
        // Symbol(Symbol.iterator): ƒ values()
        // Symbol(Symbol.toStringTag): "NodeList"
        // get length: ƒ length()
        // [[Prototype]]: Object

// console.log(boxesGet);    // живые коллекции

// HTMLCollection(3) [div.box, div.box, div.box]
    // 0: div.box
    // 1: div.box
    // 2: div.box
    // length: 3
    // [[Prototype]]: HTMLCollection
        // item: ƒ item()
        // length: (…)
        // namedItem: ƒ namedItem()
        // constructor: ƒ HTMLCollection()
        // Symbol(Symbol.iterator): ƒ values()
        // Symbol(Symbol.toStringTag): "HTMLCollection"
        // get length: ƒ length()
        // [[Prototype]]: Object

// console.log(document.body.children);

// console.log(Array.from(boxesGet)); // получаем обычный статичный неживой массив из массивоподобных объектов
