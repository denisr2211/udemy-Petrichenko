// 45. События и их обработчики

const btns = document.querySelectorAll('button');
      overlay = document.querySelector('.overlay');
// btn.onclick = function() {   // так неправильно!!!!!
//     alert('Click');
// };

// btn.addEventListener('click', () => {
//     alert('Click');
// });

// btn.addEventListener('click', () => {
//     alert('Second click');
// });

// let i = 0;
const deleteElement = (e) => {
    console.log(e.target);
    console.log(e.type);

    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
};

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

// btn.addEventListener('mouseenter', (event) => {
//     console.log(event.target);
//     event.target.remove();
//     // console.log('Hover');
// });

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true});
});

const link = document.querySelector('a');

link.addEventListener('click', function(event) {
    event.preventDefault();

    console.log(event.target);
});