// Registration
let regFormName = document.querySelector("#name");
let regFormEmail = document.querySelector("#email");
let regFormPass = document.querySelector("#password");
let regFormBtn = document.querySelector(".register");
let errMessage = document.querySelector(".error");
if (regFormBtn) {
  regFormBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (regFormEmail.value && regFormPass.value && regFormName.value) {
      localStorage.setItem(
        "register",
        JSON.stringify({
          name: regFormName.value,
          email: regFormEmail.value,
          password: regFormPass.value,
        })
      );
    } else {
      errMessage.style.display = "block";
    }
    if (localStorage.getItem("register")) window.location.href = "login.html";
  });
}

// Login
let logFormEmail = document.querySelector("#email");
let logFormPass = document.querySelector("#password");
let logFormBtn = document.querySelector(".login");
let logData, userData;

if (logFormBtn) {
  window.addEventListener("load", function () {
    logData = localStorage.getItem("register");
    if (!logData) {
      errMessage.style.display = "block";
      errMessage.innerText = "You need to register first!";
    }
    userData = JSON.parse(logData);
  });
  logFormBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (
      userData.email === logFormEmail.value &&
      userData.password === logFormPass.value
    ) {
      window.location.href = "index.html";
    } else {
      errMessage.style.display = "block";
    }
  });
}

// index page
if (!localStorage.getItem("register")) {
  window.location.href = "register.html";
}







//  select avatar
// add img-avatar
let wrapper = document.querySelector('.img__wrapper');

function donwload(input) {
    let file = input.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function () {
        let img = document.querySelector('.img-avatar');
        wrapper.appendChild(img);
        img.src = reader.result;
        let userImg = document.querySelector('.img-user');
        userImg.src = img.src;
      }
  }





