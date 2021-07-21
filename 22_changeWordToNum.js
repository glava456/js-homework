function changeNumToWord(str) {
    var result_array = str.split(' ');
    console.log(result_array);

    var result = [];

    var zero = 0;
    if (result_array[0] == 'ноль') {
        result.push(zero);
    }

    else {
        for (i = 0; i < result_array.length; i++) {
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


            if (result_array.length == 3) {
                result_array[0] 
               
            }

        }
        return result.join(' ');
    }
}
    console.log(changeNumToWord('восемьсот двадцать три'));