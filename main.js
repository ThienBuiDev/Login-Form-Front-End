const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector(".items");
myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  if (nameInput.value === "" || emailInput.value === "") {
    msg.classList.add("error");
    msg.innerHTML = "Please enter all fields";

    setTimeout(() => {
      msg.classList.remove("error");
      msg.innerHTML = "";
    }, 3000);
  } else {
    const newElement = document.createElement("li");
    newElement.innerHTML = `${nameInput.value}: ${emailInput.value}`;
    userList.appendChild(newElement);
  }
}
