function changeNumToWord(str) {
    var array = str.split(' ');
    console.log(array);

    var result = [];

    var zero = 0;
    if (array[0] == 'ноль') {
        result.push(zero);
    }

    else {
        for (i = 0; i < array.length; i++) {
            var from0To19 = [
                zero, 'один', 'два', 'три', 'четыре',
                'пять', 'шесть', 'семь', 'восемь', 'девять',
                'десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать',
                'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'
            ];
            var tens = [
                'десять', 'двадцать', 'тридцать', 'сорок', 'пятьдесят',
                'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'
            ];
            var hundreds = [
                'сто', 'двести', 'триста', 'четыреста', 'пятьсот',
                'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'
            ];


            if (array.length == 3) {
                for (j = 0; j < hundreds.length; j++) {
                    console.log (array[0]);
                if (array[0] == hundreds[j]){
                    result.push(j+1);
                }
            }

        }
        return result.join('');
    }
}
}
    console.log(changeNumToWord('девятьсот двадцать три'));