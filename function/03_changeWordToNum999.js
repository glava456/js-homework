function changeNumToWord(str) {
    let array = str.split(' ');
    let result = [];
    // var result_thousand = [];

    let zero = 0;
    if (array[0] === 'ноль') {
        result.push(zero);
    }
    else {
        for (var i = 0; i < array.length; i++) {
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

            // var ed = [
            //     'тисяча', 'тисяч', 'миллион', 'миллион', 'миллиард',
            //     'миллиардов'
            // ];

            for (var j = 0; j < hundreds.length; j++) {
                if (array[i] === hundreds[j]) {
                    result.push(j + 1);
                }
            }

            for (var n = 0; n < tens.length; n++) {

                if (array.length === 3) {
                    if (array[i + 1] === tens[n]) {
                        result.push(n + 1);
                    }
                }

                if (array.length === 2) {
                    if (array[i + 1] === tens[n]) {
                        result.push(n + 1);
                        if (n < 9) {
                            result.push(0);
                        }
                    }
                }

                if (array.length == 1) {
                    if (array[i] === tens[n - 1]) {
                        result.push(n);
                        result.push(0);
                    }
                }
            }

            for (var z = 0; z < from0To19.length; z++) {
                if (array.length === 3) {
                    if (array[i + 2] === from0To19[z]) {
                        result.push(z);
                    }
                }

                if (array.length == 2) {
                    if (array[i + 1] === from0To19[z]) {
                        if (z < 9) {
                            result.push(0);
                        }
                        result.push(z);
                    }
                }

                if (array.length === 1) {
                    if (array[i] === from0To19[z]) {
                        result.push(z);
                    }
                }

            }

            if (array.length === 1) {
                for (var j = 0; j < hundreds.length; j++) {
                    if (array[i] === hundreds[j]) {
                        result.push(j + 1);
                        result.push(0);
                        result.push(0);
                    }
                }
            }
            return parseInt(result.join(''));
        }
    }
}
console.log(changeNumToWord('семьсот восемь'));