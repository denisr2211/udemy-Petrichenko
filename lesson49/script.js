// 49. События на мобильных устройствах

// touchstart   // косание пальца
// touchmove    // косание со смещением
// touchend     // отрывание от экрана
// touchenter   // палец прикосании и движении находит на какой либо элемент
// touchleav    // ушел за пределы элемента, на который зашел во время скольжения
// touchcancel  // точка соприкосновения больше не регистрируется на поверхности

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('Start');
        console.log(e.targetTouches);
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log(e.targetTouches[0].pageX);
    });

    // box.addEventListener('touchend', (e) => {
    //     e.preventDefault();

    //     console.log('End');
    // });
});

// touches   // список пальцев, которые взаимодействуют с сенсорным экраном
// targetTouches // список пальцев, которые взаимодействуют с конкретным элементом
// changedTouches // список пальцев, которые учавствуют в текущем событии