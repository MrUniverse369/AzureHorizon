
let form = document.getElementById("form");
let firstName = document.getElementById("firstname");
let lastName = document.getElementById("lastname");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log("yoyoyo");
  console.log("The first Name is ",firstName.value, "The Last name is",lastName.value);
});

