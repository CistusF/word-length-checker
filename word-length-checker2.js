const obj = {}
var ary = new Array();
const txt = 'Hello World / 안녕 세상 / こんにちは世界 / 你好，世界'
const arr = txt.split('')
arr.forEach(i => {
    if (!obj[i]) {
        if (i == ' ') {
            if (!obj[' ']) {
                obj[' '] = 0
            }
            obj[' ']++
                return;
        } else {
            obj[i] = 0
        }
    }
    obj[i]++
})

var sortable = [];
var sortable2 = [];
for (var word in obj)
    sortable.push([word, obj[word]])
for (var word in obj)
    sortable2.push([word, obj[word]])
sortable.sort(function(a, b) {
    return b[1] - a[1]
})
sortable2.sort(function(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
});

console.log(sortable)
console.log(sortable2)
console.log(`${txt.length}`)
