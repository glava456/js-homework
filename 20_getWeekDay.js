function getWeekDay(num) {
    var days = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'
    ];
    var resatlt_day = days[num];
    return resatlt_day;
}

console.log(getWeekDay(3));