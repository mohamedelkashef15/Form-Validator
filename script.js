/*
  1- on submit check if there is an empty value showError else showSuccess
  2- on showError function add input then error message also show error message
  3- create showSuccess function and pass into it the input 
  4- make a validation for email
  5- check length(input, min, max) => for username, password
  6- check email(email)
  7- check password match(pass1, pass2)
*/

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// showError
const showError = function (input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";

  const small = formControl.querySelector("small");
  small.innerText = message;
};

// showSuccess
const showSuccess = function (input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
};

// Validate Email
const checkEmail = function (input) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(input.value)) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
};

// true => valid email
// not true => invalid

// Check required
const checkRequired = function (inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${input.id.charAt(0).toUpperCase()}${input.id.substring(1)} is requried`);
    }
  });
};

// Check length
const checkLength = function (input, min, max) {
  if (input.value.length < min) {
    showError(input, `${input.id.charAt(0).toUpperCase()}${input.id.substring(1)} Must be at least ${min} character`);
  } else if (input.value.length > max) {
    showError(input, `${input.id.charAt(0).toUpperCase()}${input.id.substring(1)} Must be less than ${max} character`);
  } else {
    showSuccess(input);
  }
};

// Check email

// Event Listener
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
});
