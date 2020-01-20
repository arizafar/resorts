let str = 'myKey,this is a string,"This is yet, another, string","123"';
let out = str.match(/(("[^,\w]*")+)|((?:\w+\s?)+)/g)
console.log(out)