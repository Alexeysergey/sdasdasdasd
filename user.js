const PREFIX = 'https://jsonplaceholder.typicode.com';
const MAUN_URI = 'http://127.0.0.1:5500/user.html';

let photoInner = document.querySelector('.photos');
let usersWrapper = document.querySelector('.users-wrapper');

fetch(`${PREFIX}/users/`)
.then((response) => response.json())
.then((value) => {
    value.forEach((a) => {
        console.log(a);
       
        usersWrapper.innerHTML += ` <div class="users-data">
        <p class="user-id" href="http://127.0.0.1:5500/user.html&usersID=${a.userId}">User's Id: ${a.id}</p>
        <h3 class="user-title">${a.name}</h3>
        <span class="user-title">Email: ${a.email}</span>
        <span class="user-body">Username: ${a.username}</span>
        
    </div>`;
        return console.log(a.id);
    })
})
  