function showRating(mark) {
    if (typeof mark !== 'number') {
        return "Неверный тип данных";
    }

    else { 
    if (mark < 0 || mark > 100) {
        return "неверное значение";
    }
    else if (mark <= 19 && mark >= 0) {
        return "F";
    }
    else if (mark <= 39 && mark >= 20) {
        return "E";
    }
    else if (mark <= 59 && mark >= 40) {
        return "D";
    }
    else if (mark <= 74 && mark >= 60) {
        return "C";
    }
    else if (mark <= 89 && mark >= 75) {
        return "B";
    }
    else if (mark <= 100 && mark >= 90) {
        return "A";
    }
}
}

module.exports = { showRating }


