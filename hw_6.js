const users = [{

  "id": 1,
  
  "first_name": "Dulcinea",
  
  "last_name": "Beeton",
  
  "email": "dbeeton0@google.co.uk"
  
  }, {
  
  "id": 2,
  
  "first_name": "Shoshanna",
  
  "last_name": "Eymer",
  
  "email": "seymer1@behance.net"
  
  }, {
  
  "id": 3,
  
  "first_name": "Cull",
  
  "last_name": "Nazareth",
  
  "email": "cnazareth2@squidoo.com"
  
  }, {
  
  "id": 4,
  
  "first_name": "Dorella",
  
  "last_name": "Damerell",
  
  "email": "ddamerell3@taobao.com"
  
  }, {
  
  "id": 5,
  
  "first_name": "Robena",
  
  "last_name": "Jankovic",
  
  "email": "rjankovic4@youtube.com"
  
  }, {
  
  "id": 6,
  
  "first_name": "Jarret",
  
  "last_name": "Guitton",
  
  "email": "jguitton5@ucoz.ru"
  
  }, {
  
  "id": 7,
  
  "first_name": "Elias",
  
  "last_name": "Hanson",
  
  "email": "ehanson6@aol.com"
  
  }, {
  
  "id": 8,
  
  "first_name": "Corby",
  
  "last_name": "Gartrell",
  
  "email": "cgartrell7@sogou.com"
  
  }, {
  
  "id": 9,
  
  "first_name": "Scarlet",
  
  "last_name": "Eilhertsen",
  
  "email": "seilhertsen8@reverbnation.com"
  
  }, {
  
  "id": 10,
  
  "first_name": "Merv",
  
  "last_name": "Lequeux",
  
  "email": "mlequeux9@sohu.com"
  
  }]

// Create storage
const storage = {
  setItem(key, value){
    localStorage.setItem(key, JSON.stringify(value))
  },
  getItem(key){
    return JSON.parse(localStorage.getItem(key))
  }
}

if(!storage.getItem('users')) {
  storage.setItem('users', users)
}

//Add New User
const form = document.querySelector('#add-user-form')
form.onsubmit = function (e) {
  e.preventDefault();
  
  const dataUsers = storage.getItem('users')
  const id = dataUsers.length + 1
  const firstName = this.first_name.value
  const lastName = this.last_name.value
  const email = this.email.value
  
  dataUsers.push({
    id,
    firstName,
    lastName,
    email
  })

  storage.setItem('users', dataUsers)

  this.first_name.value = ''
  this.last_name.value = ''
  this.email.value = ''

  createTable()
}

//Events
function colorBgRow(e) {
  this.classList.toggle('bg-color')
}

function nameAlert() {
  userName = this.childNodes[1].innerHTML
  alert(userName)
}

// Create Line with Data User
function createLine(user) {
  let html = ''
  for (let key in user) {
      html += `<td>${user[key]}</td>`
  }
  return html
}

// Main Render Function
function createTable(users) {
  const container = document.querySelector('tbody')
  container.innerHTML = ''
  // Iterate Array of Users
  const dataUsers = storage.getItem('users')

  dataUsers.forEach(user => {
    const tableRow = document.createElement('tr')
    tableRow.innerHTML = createLine(user)
    //Events
    tableRow.ondblclick = nameAlert
    tableRow.onclick = colorBgRow  
    //Render
    container.appendChild(tableRow)
  })
} 

createTable(users)
