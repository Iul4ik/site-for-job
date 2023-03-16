// location href
let myWork = document.querySelector('.btn-1');
myWork.addEventListener('click', () => {
window.location.href = "my-work.html";
})

let myWorkMobile = document.querySelector('.btn1-mobile');
myWorkMobile.addEventListener('click', () => {
  window.location.href = "my-work.html";
})

let sendMessage = document.querySelector('.btn-2');
sendMessage.addEventListener('click', () => {
window.location.href = "send.html";
})

let sendMessageMobile = document.querySelector('.btn2-mobile');
sendMessageMobile.addEventListener('click', () => {
  window.location.href = "send.html";
})


// script for open Profile
function openNav() {
  document.getElementById("openProfile").style.width = "100%";
}

function closeNav() {
  document.getElementById("openProfile").style.width = "0";
}

//  script for open Menu Burger 
  function openBurger() {
  document.getElementById("openBurger").style.width = "100%";
}

function closeBurger() {
  document.getElementById("openBurger").style.width = "0";
}

// function search
function search() {
const input = document.getElementById('search-input');
const filter = input.value.toUpperCase();
const ul = document.getElementById('list');
const li = ul.getElementsByTagName('li');
for (let i = 0; i < li.length; i++) {
  const a = li[i].getElementsByTagName('a')[0];
  const txtValue = a.textContent || a.innerText;
  if (txtValue.toUpperCase().indexOf(filter) > -1) {
    li[i].style.display = '';
  } else {
    li[i].style.display = 'none';
  }
}
}


// add coments and share post
let comments = [];
// loadComments();

document.querySelector('#comment-add-stories').onclick = function() {
  event.preventDefault();
  let commentBodyStoris = document.querySelector('#comment-body-stories');
  let p = document.querySelector('.error');

  let comment = {
    body : commentBodyStoris.value,
    time : Math.floor(Date.now()/1000),
  }


  // clear form
  if (commentBodyStoris.value === '') { 
    alert('Напишите что-нибудь')
  } else {
    comments.push(comment);
    saveComments();
    showComments();
  }
}

function saveComments() {
  localStorage.setItem('comments', JSON.stringify(comments));
}


function loadComments() {
  if (localStorage.getItem('comments')) comments = JSON.parse(localStorage.getItem('comments'));
  showComments();
}

function showComments() {
  let commentField = document.querySelector('#comment-field-stories');
  let out = '';
  comments.forEach(function(item) {
    out += `<div class="stories-add" >
              <span class="stories-span-name">${item.body}</span>
              <span class="stories-span-data">${timeConverter(item.time)}</span>
              <img class="img-storis" src="img/png/eu.png">
            </div>`
  });
  commentField.innerHTML = out;
}
function timeConverter(UNIX_timestamp) {
  let a = new Date(UNIX_timestamp * 1000);  
  let months = ['01','02','03','04','05','06','07','08','09','10','11','12'];
  let year = a.getFullYear();
  let month = months[a.getMonth()];
  let date = a.getDate();
  let time = date + '.' + month + '.' + year;
  return time;
}









