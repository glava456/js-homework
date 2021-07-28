function getWeekDay(num) {
    let result;
    switch (num) {
        case 1:
            result = 'Понедельник';
            break;
        case 2:
            result = 'Вторник';
            break;
        case 3:
            result = 'Среда';
            break;
        case 4:
            result = 'Четверг';
            break;
        case 5:
            result = 'Пятница';
            break;
        case 6:
            result = 'Суббота';
            break;
        case 7:
            result = 'Воскресенье';
            break;

        default:
            result = "Нет таких значений";
    }
    return result;
}

console.log(getWeekDay(4));