// 42. Получение элементов со страницы

const box = document.getElementById('box'); 
console.log(box);

const btns = document.getElementsByTagName('button'); // методы для получения псевдо массивов
console.log(btns[1]);

const circles = document.getElementsByClassName('circle'); // методы для получения псевдо массивов
console.log(circles);

const hearts = document.querySelectorAll('.heart'); // css selector
hearts.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector('.heart'); // css selector
console.log(oneHeart);