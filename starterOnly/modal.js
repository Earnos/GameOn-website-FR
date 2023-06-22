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

// const isValidBirthDate = (value) => {
//   const re = /^[a-zA-Z][a-zA-Z\s-]+[a-zA-Z]$/;
//   return re.test(value);
// };

const isValidQty = (value) => {
const re = /^(\d{1,2})(\.\d\d)?$/;
   return re.test(value)
 }



// form RegEx validation functions

firstName.addEventListener("input", () => {
  if (isValidText(firstName.value)) {
    formData[0].dataset.errorVisible = "false";
  } else {
    //formData.dataset.errorVisible= "true";
    formData[0].dataset.error = "Saisie du prénom incorrecte";
    formData[0].dataset.errorVisible = "true";  
  }
});

lastName.addEventListener("input", () => {
  if (isValidText(lastName.value)) {
    formData[1].dataset.errorVisible = "false";
  } else {
    formData[1].dataset.error = "Saisie du nom incorrecte";
    formData[1].dataset.errorVisible = "true";
  }
});

mail.addEventListener("input", () => {
  if (isValidEmail(mail.value) || mail.value == "") {
    formData[2].dataset.errorVisible = "false";
  } else {
    formData[2].dataset.error = "Adresse mail invalide";
    formData[2].dataset.errorVisible = "true";
  }
});

// birthDate.addEventListener("input", () => {
//   if (isValidBirthDate(birthDate.value) || birthDate.value == "") {
//     formData[3].dataset.errorVisible = "false";
//   } else {
//     formData[3].dataset.error = "Date incorrecte";
//     formData[3].dataset.errorVisible = "true";
//   }
// });

quantity.addEventListener("input", () => {
  if (isValidQty(quantity.value) || quantity.value == "" ) {
    formData[4].dataset.errorVisible = "false";
  } else {
    formData[4].dataset.error = "Entrer une valeur";
    formData[4].dataset.errorVisible = "true";
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

// const form = document.getElementsByName("reserve");

// form.addEventListener("submit", (e) => {
//   // form.classList.remove("modal-body");
//   e.preventDefault();
// })