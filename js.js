
const PREFIX = 'https://jsonplaceholder.typicode.com';

let photoInner = document.querySelector('.photos');
let usersWrapper = document.querySelector('.users-wrapper');
// fetch(`${PREFIX}/posts/1`)
//   .then((response) => response.json())
//   .then((json) => console.log(json))


// fetch(`${PREFIX}/photos`)
//   .then((response) => response.json())
//   .then((json => {
//     console.log(json);
//     for (let i=0; i<6;i++){
//         photoInner.innerHTML +=  `<div  class="cont-photos">
//     <div><img class="img" src="${json[i].url}" alt=""><p>${json[i].title}</p></div>
// </div>`;
//     }
    
// }))

fetch(`${PREFIX}/posts`)
.then((response) => response.json())
.then((value) => {
    value.forEach((a) => {
        console.log(a);
        usersWrapper.innerHTML += ` <div class="users-data">
        <a class="user-id" href="http://127.0.0.1:5500/user.html?usersID=${a.userId}">User's Id: ${a.userId}</a>
        <h3 class="user-title">${a.title}</h3>
        <span class="user-body">${a.body}</span>
    </div>`;
        return console.log(a.id);
    })
})
  