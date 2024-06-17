const firstnameinput = document.getElementById("firstName");
const lastnameinput = document.getElementById("lastName");
const emailinput = document.getElementById("email");
const passwordinput = document.getElementById("password");
const subscriptionInputs = document.querySelectorAll('input[name="subscription"]:checked');
const errormessage = document.getElementsByClassName("error");
const firstNameRegex = /^[A-Za-z]{3,50}$/;


let form = document.getElementById("registrationForm")
form.addEventListener("submit", (event) => {
  event.preventDefault();
 
  validation(firstnameinput, firstNameRegex, 0, "input correct name")
} )

function validation(id, regex, index, message){
  if (!regex.test(id.value)) {
    message[index].innerHTML = errormessage
    
  } else{errormessage[index].innerHTML = ""}
}