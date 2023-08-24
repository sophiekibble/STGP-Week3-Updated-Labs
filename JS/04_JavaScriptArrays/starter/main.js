let quote = ["I", "am", "your", "friend"]

console.log(quote);
console.log(quote[2]);

console.log (quote.pop());
console.log (quote.push("father"))
console.log (quote.unshift("Luke"));

let erroneousWord = "Luke";
let lukeIsHere = quote.find(n => { 
    return n === erroneousWord});

let lukeIsAt;

if (lukeIsHere) {
    lukeIsAt = quote.findIndex(n => {
        return n === erroneousWord
    });
    quote[lukeIsAt] = "No";
}

let output = "";

for (let i = 0, j = quote.length; i < j; i++) {
    if (i === j - 1) {
        output += quote[i] + '!';
    } else if (quote[i] === 'No') {
        output += quote[i] + ', ';
    } else {
        output += quote[i] + ' '
    }
}
console.log(output);