const input = prompt('Enter text');
var result = '';

for (var i = 0; i < input.length; i++) {
    if (input[i] === '>') {continue}
    (input[i] !== '<') 
        ? result += input[i]   
        : i += 2;
}

alert(result)