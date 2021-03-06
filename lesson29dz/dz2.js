// Постепенно переходим к более реалистичным задачам :) Вы обнаружите, что там используется все тоже самое. 
// Напишите функцию, котрая будет определять номер купе по переданному ей номеру места. Наглядно: (скриншот). 

// Функция принимает ТОЛЬКО целое число от 1 до 36. 
// Если предать аргумент не число, отрицательное или дробное - возвращается сообщение:
// "Ошибка. Проверьте правильность введенного номера места"
// Если число 0 или больше 36, то сообщение "Таких мест в вагоне не существует"

// Пример:
// getCoupeNumber(33) => 9
// getCoupeNumber(7) => 2
// getCoupeNumber(300) => "Таких мест в вагоне не существует"
// getCoupeNumber(0) => "Таких мест в вагоне не существует"
// getCoupeNumber(7.7) => "Ошибка. Проверьте правильность введенного номера места"
// getCoupeNumber(-10) => "Ошибка. Проверьте правильность введенного номера места"
// getCoupeNumber('Hello') => "Ошибка. Проверьте правильность введенного номера места"

// Такая функция вполне реальна и может использоваться для формирования билетов, в том числе и визуально на сайтах. 
// Конечно там будет куда больше условий, но смысл остается таким же. 

function getCoupeNumber(seatNumber) {
    if (typeof (seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
        return "Ошибка. Проверьте правильность введенного номера места";
    }

    if (seatNumber === 0 || seatNumber > 36) {
        return "Таких мест в вагоне не существует";
    }

    for (let i = 4; i <= 36; i = i + 4) {
        if (seatNumber <= i) {
            return Math.ceil(i / 4);
        }
    }
}

console.log(getCoupeNumber(33));