"use strict";

/**
 * Проверяет верность последовательности скобок.
 * При нахождении открывающей скобки записываем соответствующую ей
 * закрывающую в стек.
 * При нахождении закрывающей скобки проверяем на соответствие открывающую из стека.
 * При несоответствии выводим ошибку.
 * 
 * При непустом стеке после цикла выводим ошибку.
 *
 * @param {String} str Исходная строка.
 * @return {number} 0 - успешно, 1 - ошибка.
 */
const checkSyntax = (str) => {
    const stack = [];
    const brackets = {'<':'>','[':']','{':'}','(':')'};

    for (let i = 0; i < str.length; i++) {
        if (str[i] in brackets) {
            stack.push(brackets[str[i]]);
        }
        else if (Object.values(brackets).includes(str[i])) {
            if (str[i] !== stack.pop()) {
                return 1;
            }
        }
    }
    if (stack.length !== 0) {
        return 1;
    }
    
    return 0;
}

try {
    test(checkSyntax, ["---(++++)----"], 0);
    test(checkSyntax, [""], 0);
    test(checkSyntax, ["before ( middle []) after "], 0);
    test(checkSyntax, [") ("], 1);
    test(checkSyntax, ["} {"], 1);
    test(checkSyntax, ["<(   >)"], 1);
    test(checkSyntax, ["(  [  <>  ()  ]  <>  )"], 0);
    test(checkSyntax, ["   (      [)"], 1);

    console.info("Congratulations! All tests passed.");
} catch(e) {
    console.error(e);
}

function test(call, args, count, n) {
    let r = (call.apply(n, args) === count);
    console.assert(r, `Found items count: ${count}`);
    if (!r) throw "Test failed!";
}