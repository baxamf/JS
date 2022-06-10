import users from "./users";
import {male, female} from "./sort_users";

const container = document.querySelector('.app');

function renderUser(usersArr) {
  const usersContainer = document.createElement('div');
  usersContainer.classList.add('users');
  usersArr.forEach(user => {
    const userName = document.createElement('span');
    userName.innerHTML = user.first_name;
    usersContainer.appendChild(userName);
  })
  container.appendChild(usersContainer);

}

renderUser(male);

renderUser(female);