function pointСoordinate(x, y) {
    if (x > 0 && y > 0) {
        return "точка принадлежит первой четверти";
    }
    else if (x < 0 && y > 0) {
        return "точка принадлежит второй четверти";
    }
    else if (x < 0 && y < 0) {
        return "принадлежит третьей координатной четверти";
    }
    else if (x == 0 || y == 0) {
        return "введите значение, которое не равно 0";
    }
    else {
        return "принадлежит четвертой координатной четверти";
    }
}
var resalt = pointСoordinate(-2, 5);
console.log (resalt);




