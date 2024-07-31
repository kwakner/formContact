const form = document.querySelector("#form-container");
const firstName = document.querySelector("#fname");
const lastName = document.querySelector("#lname");
const email = document.querySelector("#email");
const message = document.querySelector("#mess");
const consent = document.querySelector("#check");
const queryType = document.querySelector('input[type="radio"]');
const errorAlert = document.querySelectorAll(".tet");
const successMsg = document.querySelector("#success-message");

let isValid = true;

form.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  // invalid fname

  if (firstName.value === "") {
    document.querySelector(".tet").style.display = "block";
    firstName.style.border = "1px solid var(--Red)";
    isValid = true;
  } else {
    document.querySelector(".tet").style.display = "none";
    firstName.style.border = "1px solid green";
    isValid = false;
  }

  // invalid lname

  if (lastName.value === "") {
    document.querySelector("#lname + .tet").style.display = "block";
    lastName.style.border = "1px solid var(--Red)";
    isValid = true;
  } else {
    document.querySelector("#lname + .tet").style.display = "none";
    lastName.style.border = "1px solid green";
    isValid = false;
  }

  // email validation

  if (email.value === "") {
    document.querySelector("#email + .tet").style.display = "block";
    email.style.border = "1px solid var(--Red)";
    isValid = true;
  } else {
    document.querySelector("#email + .tet").style.display = "none";
    email.style.border = "1px solid green";
    isValid = false;
  }

  // radio checked

  if (!queryType.checked == true) {
    document.querySelector(".radio-input + .tet").style.display = "block";
    isValid = true;
  } else {
    document.querySelector(".radio-input + .tet").style.display = "none";
    isValid = false;
  }

  // invalid message

  if (message.value === "") {
    document.querySelector("#mess + .tet").style.display = "block";
  } else {
    document.querySelector("#mess + .tet").style.display = "none";
  }

  // chexkbox chcked

  if (!consent.checked == true) {
    errorAlert[5].style.display = "block";
  } else {
    errorAlert[5].style.display = "none";
  }

  //  form is valid

  if (!isValid) {
    successMsg.style.display = "block";
    // setTimeout(function () {
    //   successMsg.style.display = "none";
    // }, 2000);
    return true;
  } else {
    successMsg.style.display = "none";
    return false;
  }
}

const header = document.querySelector(".radio-input  input[type='radio']");
const btns = document.getElementsByClassName("radio-option");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
  });
}
