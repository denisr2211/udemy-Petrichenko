const box = document.getElementById('box'), 
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart');

// console.dir(box);

box.style.backgroundColor = 'blue'; //изменяем цвет(стиль)
box.style.width = '500px'; //изменяем ширину

box.style.cssText = 'background-color: blue; width:500px';
// box.style.cssText = `background-color: blue; width: ${num}px`;

btns[1].style.borderRadius = '30%';
// circles.style.backgroundColor = 'red'; // будет ошибка
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';  // изменяем фон
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue'; // изменяем фон
});

// ментоды для работы состраницами
const div = document.createElement('div');
// const text = document.createTextNode('Тут был я');

div.classList.add('black');

// document.body.append(div);

wrapper.append(div); // вставляет элемент в конец родителя

wrapper.prepend(div);  // вставляет элемент в начало родителя

hearts[0].before(div); // вставит перед указанным элементом
hearts[0].after(div); // вставит после указанного элемента

// circles[0].remove();  // удалит элемент

// hearts[0].replaceWith(circles[0]);// один элемент заменить другим

div.innerHTML = "<h1>Hello guys!</h1>";

// div.textContent = "Hello"; // только текст
// div.textContent = "<h1>Hello</h1>";  // так неправильно

// div.insertAdjacentHTML("beforebegin", '<h2>Hello</h2>');  // 4-е варианта подстановки
// div.insertAdjacentHTML("afterbegin", '<h2>Hello</h2>');
// div.insertAdjacentHTML("beforeend", '<h2>Hello</h2>');
// div.insertAdjacentHTML("afterend", '<h2>Hello</h2>');

