// querySelector() ищет первый элемент
// querySelectorAll() ищет все элемент
// addEventListener()
// classList()
var login_link = document.querySelector(".login__link");
var popup = document.querySelector(".modal");
var close = document.querySelector(".close");
var login = popup.querySelector("[name=login]");
var form = popup.querySelector(".modal__form");
var password = popup.querySelector("[name=password]");
var login_storeg = localStorage.getItem("login");

login_link.addEventListener("click", function(evt) {
    evt.preventDefault();
    console.log("открыть попап");
    popup.classList.add("modal-show");
    if (login_storeg) {
        login.value = login_storeg;
        password.focus();
    } else {
        login.focus();   
    }
});

close.addEventListener("click", function(evt) {
    evt.preventDefault();
    console.log("закрыть попап");
    popup.classList.remove("modal-show");
});

form.addEventListener("submit", function(evt) {
    evt.preventDefault();
    if (!login.value || !password.value) {
        evt.preventDefault();
        console.log("no pass no login");
    }
    else {
        localStorage.setItem("login", login.value);
        console.log({"login":login.value});
        localStorage.setItem( "password", password.value);
        console.log({"password":password.value});
    }
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        if (popup.classList.contains("modal-show")) {
            evt.preventDefault();
            popup.classList.remove("modal-show");
            console.log("закрыть попап");
        }
    }
});