const names = prompt('Enter names').split(', ');
var i = 0;
for (var firstName of names) {
    i++;
    console.log(`<li>${i} ${firstName}</li>`)
}

names.forEach((el,index) => {
    console.log(`<li>${index + 1} ${el}</li>`)
})