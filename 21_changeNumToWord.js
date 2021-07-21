function changeNumToWord(num) {
    if (num >= 0){
    var result = [];
    var zero = 'ноль';
    if (num == '0') {
        result.push(zero);
    } else {
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
            let i_handens = Math.floor(num/100);
            if (i_handens != 0){
            result.push(hundreds[i_handens-1]);
            }

            if (num>10 & num < 20){
                result.push(from0To19[num]);
            }
            else {

            let i_tens = Math.floor((num%100)/10);
            if (i_tens != 0){
            result.push(tens[i_tens-1]);
            }

            let i_from0To19 = Math.floor(num%10);
            result.push(from0To19[i_from0To19]);

        }
    }
    return result.join(' ');
}
}
console.log(changeNumToWord(999));