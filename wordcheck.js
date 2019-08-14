var wordchecker = require('./word-length-checker')

var a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 1234567890'
wordchecker.wordadd(a)
console.log(a.length)
