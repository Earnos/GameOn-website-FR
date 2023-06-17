function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeForm = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close form window
closeForm.addEventListener('click', e => {
  modalbg.style.display = "none";
});


 // RegEx Input selection
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const mail = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");


// RegEx test function
 const isValidText = (value) => {
  const re = /^([^0-9]*)$/;
  return re.test(value);
};

const isValidAddress = (value) => {
  const re = /^[0-9]{1,3}(?:(?:[,. ]){1}[-a-zA-Zàâäéèêëïîôöùûüç]+)*$/;
  return re.test(value);
};

const isValidEmail = (value) => {
  const re =
    /^([a-zA-Z0-9]+(([\.\-\_]?[a-zA-Z0-9]+)+)?)\@(([a-zA-Z0-9]+[\.\-\_])+[a-zA-Z]{2,4})$/;
  return re.test(value);
};

const isValidBirthDate = (value) => {
  const re = /^[a-zA-Z][a-zA-Z\s-]+[a-zA-Z]$/;
  return re.test(value);
};



// form RegEx validation functions

firstName.addEventListener("input", () => {
  if (isValidText(firstName.value)) {
    document.getElementById("firstNameErr").innerText = "";
  } else {
    //document.querySelector(".formData").hasAttribute("data-error").innerText = "test";
    firstName.classList.toggle("true");
    //document.getElementsByTagName(input).getAttribute("data-error").innerText = "Saisie incorrecte"
    document.getElementById("firstNameErr").innerText =
    "Saisie du prénom incorrecte";
    //const first = document.getElementById("firstNameErr");
    //first.getAttribute("data-error-visible");
    
  }
});

lastName.addEventListener("input", () => {
  if (isValidText(lastName.value)) {
    document.getElementById("lastNameErrorMsg").innerText = "";
  } else {
    document.getElementById("lastNameErrorMsg").innerText =
      "Saisie du nom incorrecte";
  }
});

mail.addEventListener("input", () => {
  if (isValidEmail(mail.value) || mail.value == "") {
    document.getElementById("emailErrorMsg").innerText = "";
  } else {
    document.getElementById("emailErrorMsg").innerText = "Email incorrect";
  }
});

birthDate.addEventListener("input", () => {
  if (isValidBirthDate(birthDate.value) || birthDate.value == "") {
    document.getElementById("").innerText = "";
  } else {
    document.getElementById("").innerText =
      "Date de naissance non valide";
  }
});

quantity.addEventListener("input", () => {
  if (isValidCity(quantity.value) || quantity.value == "") {
    document.getElementById("").innerText = "";
  } else {
    document.getElementById("").innerText =
      "Veuillez saisir un nombre";
  }
});


// checkBox confirmation on submit
const checkInput = document.querySelector(".checkbox-input")
const IscheckBoxIsOff = () =>  {
    submitBtn = document.querySelector("btn-submit");
  if (!checkInput.value) {
    submitBtn.style.background = "grey";
  } else {
    return;
  }
}


// submit form & comfirm button
const form = document.getElementsByName("reserve");

form.addEventListener("submit", (e) => {
  form.classList.remove("modal-body");
  e.preventDefault();
})