/*
  1- on submit check if there is an empty value showError else showSuccess
  2- on showError function add input then error message also show error message
  3- create showSuccess function and pass into it the input 
  4- make a validation for email
  5- check length(input, min, max) => for username, password
  6- check email(email)
  7- check password match(pass1, pass2)
  Add comment
*/

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Show error
const showError = function (input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";

  const small = formControl.querySelector("small");
  small.style.visability = "visable";
  small.innerText = message;
};

// Show Success
const showSuccess = function (input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
};

// get field Name
const getFiledName = function (input) {
  return `${input.id.charAt(0).toUpperCase()}${input.id.slice(1)}`;
};

// check empty input
const checkEmpty = function (inputArr) {
  inputArr.forEach(function (input) {
    if (input.value === "") {
      showError(input, `${getFiledName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
};

// Email validation
const checkEmail = function (input) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(input.value)) {
    showSuccess(input);
  } else {
    showError(input, "Email invalid");
  }
};

// check length
const checkLength = function (input, min, max) {
  console.log(input.value.length);
  if (input.value.length < min) {
    showError(input, `${getFiledName(input)} must be at least ${min} characters.`);
  } else if (input.value.length > max) {
    showError(input, `${getFiledName(input)} must be less than ${max} characters.`);
  } else {
    showSuccess(input);
  }
};

// Check password match
const checkPassword = function (input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Password didn't match");
  } else {
    showSuccess(input2);
  }
};

// Event listener
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkEmpty([username, email, password, password2]);
  checkEmail(email);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkPassword(password, password2);
});
