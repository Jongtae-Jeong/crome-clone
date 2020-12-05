
const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");


const USER_LS = "currentUser";
const SHOWING_ON = "showing"

function saveNmae(text){
    localStorage.setItem(USER_LS, text);
}

function greettingSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveNmae(currentValue);

}

function askForName(){
    form.classList.add(SHOWING_ON);
    form.addEventListener("submit",greettingSubmit )
}

function paintGreeting(text){
    form.classList.remove(SHOWING_ON);
    greeting.classList.add(SHOWING_ON);
    greeting.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS)
    if(currentUser ===null){
        askForName()
    }
    else{
        paintGreeting(currentUser);
    }
}


function init(){
    loadName()
}
init();