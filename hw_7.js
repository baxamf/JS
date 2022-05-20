const users = [{

  "id": 1,
  
  "name": "Veronika",
  
  "email": "vgroves0@vistaprint.com",
  
  "age": 50,
  
  "city": "Javhlant",
  
  "gender": "Female",
  
  "inn": 2604048463
  
  }, {
  
  "id": 2,
  
  "name": "Correy",
  
  "email": "cskidmore1@shop-pro.jp",
  
  "age": 50,
  
  "city": "Junglinster",
  
  "gender": "Male",
  
  "inn": 5396152028
  
  }, {
  
  "id": 3,
  
  "name": "Chrissie",
  
  "email": "csobieski2@go.com",
  
  "age": 40,
  
  "city": "Mercaderes",
  
  "gender": "Female",
  
  "inn": 7437115687
  
  }, {
  
  "id": 4,
  
  "name": "Adrianna",
  
  "email": "awharrier3@hud.gov",
  
  "age": 33,
  
  "city": "Manuel Cavazos Lerma",
  
  "gender": "Non-binary",
  
  "inn": 6292774004
  
  }, {
  
  "id": 5,
  
  "name": "Fairlie",
  
  "email": "feliasen4@bing.com",
  
  "age": 34,
  
  "city": "Радовиш",
  
  "gender": "Female",
  
  "inn": 5943534093
  
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

function itemContentUserData(user) {
  const userData = document.createElement('div')
  const userDataImg = document.createElement('div')
  const userDataText = document.createElement('div')

  userData.className = 'user_data'
  userDataImg.className = 'user_data__img'
  userDataText.className = 'user_data__txt'

  userDataText.innerHTML = `
    <div>
      <p><b>inn:</b> ${user.inn}</p>
      <p><b>name:</b> ${user.name}</p>
      <p><b>age:</b> ${user.age}</p>
    </div>
    <div>
      <p><b>email:</b> ${user.email}</p>
      <p><b>city:</b> ${user.city}</p>
      <p><b>gender:</b> ${user.gender}</p>
    </div>`

  userData.append(userDataImg, userDataText)

  return userData
}

function itemContent(user) {
  const itemContent = document.createElement('div')
  
  itemContent.className = 'accordion_item__content'
  itemContent.appendChild(itemContentUserData(user))

  return itemContent
}

function itemHeader(user) {
  const itemHeader = document.createElement('div')
  const headerContent = document.createElement('h3')

  itemHeader.className = 'accordion_item__header'
  headerContent.innerHTML = user.name
  itemHeader.appendChild(headerContent)
  itemHeader.onclick = openAccordion

  return itemHeader
}

function openAccordion() {
  const parentNode = this.parentElement
  parentNode.classList.toggle('open')
}

function createAccordionItem(user) {
  const item = document.createElement('div')
   
  item.className = 'accordion_item'
  item.append(itemHeader(user), itemContent(user))

  return item
}

function createAccordion() {
  const container = document.querySelector('.container')
  const dataUsers = storage.getItem('users')
  
  dataUsers.forEach(user => {
    const accordionItem = createAccordionItem(user)
    container.appendChild(accordionItem)
  });

}

createAccordion()