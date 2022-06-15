import css from "./main.css";
import users from "./data";

const container = document.querySelector('.app');

function userData(user) {
  let userInfo = ""
  for (let data in user) {
    userInfo += `<li><b>${data}:</b> ${user[data]}</li>`
  }
  return userInfo
}

function renderUser(usersArr) {
  const usersContainer = document.createElement('div');
  usersContainer.classList.add('users');
  usersArr.forEach(user => {
    const userLine = document.createElement('ul');
    userLine.classList.add('user');
    userLine.innerHTML = userData(user)
    usersContainer.appendChild(userLine);
  })
  container.appendChild(usersContainer);

}

renderUser(users);

