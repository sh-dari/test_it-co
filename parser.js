"use strict";

/**
 * Парсит URL.
 * @param {String} str Исходная строка.
 * @return {Object} объект с распарсенными данными.
 */
const parseUrl = (str) => {
    const parse = str.match(/^((https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?))([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/);
    return {
        href: parse[0],
        hash: parse[8],
        port: parse[5],
        host: parse[3],
        protocol: parse[2],
        hostname: parse[4],
        pathname: parse[6],
        origin: parse[1],
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