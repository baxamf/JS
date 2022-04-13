var el = document.querySelector('#list-names');

console.log(el);

var names = ['Vasya', 'Alex', 'Pyotr', 'Valya'];

names[names.length] = 'Olya'

console.log(names);

var html = '';

for(var userName of names) {
    html += `<li>${userName}</li>`
}

console.log(html)
el.innerHTML = html;

var user = {
    name: 'Vasya',
    age: 34,
    isOpen: false,
    email: 'Vasya@gmail.com'
}

user.female = true;
console.log(user.female)