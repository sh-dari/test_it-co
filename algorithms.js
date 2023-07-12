"use strict";

/**
 * Находит числа, сумма которых равна заданному числу.
 * 
 * Сначала мы складываем первое и последнее числа
 * Если сумма больше нужной, то уменьшаем индекс последнего числа
 * Иначе, если сумма меньше, то увеличиваем индекс первого числа.
 * (Данный алгоритм будет работать благодаря начальному условию
 * об упорядоченности исходного массива)
 * 
 * При соответствии добавляем порядковые номера чисел в массив.
 * 
 * Алгоритм продолжает работу, пока индексы не станут равны.
 * @param {number[]} mass Исходный массив.
 * @param {number} value Искомое значение.
 * @return {number[]} порядковые номера чисел/пустой массив если таких чисел нет.
 */
const findValue = (mass, value) => {
    const result = [];
    let endIndex = mass.length - 1;
    for(let i = 0; i !== endIndex;) {
        if (mass[i] + mass[endIndex] === value) {
            result.push(i+1, endIndex+1);
            return result
        }
        else if (mass[i] + mass[endIndex] > value) {
            endIndex--;
        }
        else if (mass[i] + mass[endIndex] < value) {
            i++;
        }
    }
    return result
}