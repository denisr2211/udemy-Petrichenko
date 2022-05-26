// 46. Навигация по DOM - элементам, data-атрибуты, преимущество for/of
// console.log(document.head);
// console.log(document.documentElement);
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastChild);  // отталкивались от родителя

// console.log(document.querySelector('#current').parentNode.parentNode);  // путешевствуе по дом дереву
// console.log(document.querySelector('#current').parentNode.parentElement);

// console.log(document.querySelector('[data-current="3"]').nextSibling);
// console.log(document.querySelector('[data-current="3"]').previousSibling);
// console.log(document.querySelector('[data-current="3"]').nextElementSibling);

for (let node of document.body.childNodes) {
    if (node.nodeName  == '#text') {
        continue;
    }
    
    console.log();
}