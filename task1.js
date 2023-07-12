"use strict";

/**
 * Возвращает количество подстрок вида s1s2 в строке.
 *
 * @param {String} str Исходная строка.
 * @param {String} s1 Первый символ.
 * @param {String} s2 Второй символ.
 * @return {number} количество подстрок.
 */
const dscount = (str, s1, s2) => {
    let count = 0;
    let substr = s1 + s2;

    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if (str[i] + str[i+1] === substr) {
            count++;
        }
    }
    
    return count
}

try {
    test(dscount, ['ab___ab__', 'a', 'b'], 2);
    test(dscount, ['___cd____', 'c', 'd'], 1);
    test(dscount, ['de_______', 'd', 'e'], 1);
    test(dscount, ['12_12__12', '1', '2'], 3);
    test(dscount, ['_ba______', 'a', 'b'], 0);
    test(dscount, ['_a__b____', 'a', 'b'], 0);
    test(dscount, ['-ab-аb-ab', 'a', 'b'], 2);
    test(dscount, ['aAa', 'a', 'a'], 2);

    console.info("Congratulations! All tests passed.");
} catch(e) {
    console.error(e);
}

function test(call, args, count, n) {
    let r = (call.apply(n, args) === count);
    console.assert(r, `Found items count: ${count}`);
    if (!r) throw "Test failed!";
}