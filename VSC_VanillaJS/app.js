const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function onLoginBtnClick(){
    console.log(loginInput.value);
    console.log("clicked");
}

loginButton.addEventListener("click", onLoginBtnClick);