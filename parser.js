"use strict";

/**
 * Парсит URL.
 * @param {String} str Исходная строка.
 * @return {Object} объект с распарсенными данными.
 */
const parseUrl = (str) => {
    const mass = str.split(/[:\/#?]+/g);
    return {
        href: str,
        hash: `#${mass[6]}`,
        port: mass[2],
        host: `${mass[1]}:${mass[2]}`,
        protocol: `${mass[0]}:`,
        hostname: mass[1],
        pathname: `\/${mass[3]}\/${mass[4]}`,
        origin: `${mass[0]}://${mass[1]}:${mass[2]}`,
    }
}

let a = parseUrl('http://sys.it-co.ru:8080/do/any.php?a=1&b[]=a&b[]=b#foo')

console.log( a.href == "http://sys.it-co.ru:8080/do/any.php?a=1&b[]=a&b[]=b#foo" )
console.log( a.hash == "#foo" )
console.log( a.port == "8080" )
console.log( a.host == "sys.it-co.ru:8080" )
console.log( a.protocol == "http:" )
console.log( a.hostname == "sys.it-co.ru" )
console.log( a.pathname == "/do/any.php" )
console.log( a.origin == "http://sys.it-co.ru:8080" )