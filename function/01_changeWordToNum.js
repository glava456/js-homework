function changeNumToWord(str) {
    var array = str.split(' ');

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
                    if (array[i] == hundreds[j]) {
                        result.push(j + 1);
                    }
                }

                for (n = 0; n < tens.length; n++) {
                    if (array[i + 1] == tens[n]) {
                        result.push(n + 1);
                    }

                }
                for (z = 0; z < from0To19.length; z++) {
                    if (array[i + 2] == from0To19[z]) {
                        result.push(z);
                    }
                }
            }

            if (array.length == 2) {
                for (j = 0; j < hundreds.length; j++) {
                    if (array[i] == hundreds[j]) {
                        result.push(j + 1);

                    }
                }

                for (n = 0; n < tens.length; n++) {
                    if (array[i] == tens[n]) {
                        result.push(n + 1);
                    }

                }
                for (z = 0; z < from0To19.length; z++) {
                    if (array[i + 1] == from0To19[z]) {
                        if (z > 9) {
                            result.push(0);
                        }
                        result.push(z);
                    }
                }
            }

            if (array.length == 1) {
                for (j = 0; j < hundreds.length; j++) {
                    if (array[i] == hundreds[j]) {
                        result.push(j + 1);
                        result.push(0);
                        result.push(0);
                    }
                }
                for (n = 0; n < tens.length; n++) {
                    if (array[i] == tens[n]) {
                        result.push(n + 1);
                        result.push(0);
                    }

                }
                for (z = 0; z < from0To19.length; z++) {
                    if (array[i] == from0To19[z]) {
                        result.push(z);
                    }
                }
            }
            return Number(result.join(''));
        }
    }
}
console.log(changeNumToWord('сорок пять'));