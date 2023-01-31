const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form Input");
const greeting = document.querySelector("#greeting");
const Hidden_classname = "hidden";

function logsubmit(event) {
  event.preventDefault();
  console.log(loginInput.value);
  loginForm.classList.add("Hidden_classname");
  const username = loginInput.value;
  greeting.innerText = `hello ${username}`;
  greeting.classList.remove("Hidden_classname");
}
function linkClick() {
  alert("click!!");
}

loginForm.addEventListener("submit", logsubmit);
link.addEventListener("click", linkClick);
