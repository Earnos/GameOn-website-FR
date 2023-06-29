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
};

// close form window
closeForm.addEventListener('click', e => {
  modalbg.style.display = "none";
});


 // RegEx Inputs selection
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

const isValidQty = (value) => {
const re = /^(\d{1,4})(\.\d\d)?$/;
   return re.test(value)
 }



// RegEx validation functions

firstName.addEventListener("input", () => {
  if (isValidText(firstName.value)) {
    formData[0].dataset.errorVisible = "false";
  } else {
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

quantity.addEventListener("input", () => {
  if (isValidQty(quantity.value) || quantity.value == "" ) {
    formData[4].dataset.errorVisible = "false";
  } else {
    formData[4].dataset.error = "Entrer une valeur correcte";
    formData[4].dataset.errorVisible = "true";
  }
});

// submit's form & comfirm button
 const form = document.getElementById('form');
 const submitBtn = document.querySelector(".btn-submit");
 const formBody = document.querySelector(".modal-body");
 const checkboxRequired = document.getElementById("checkbox1");
 const contentForm = document.querySelector(".content");

// form's submit event
    form.addEventListener("submit", (e) => {e.preventDefault()}, false);
 
// creation of confirmation submit's windows  
    const afterSubmitWindows = () => {
      form.style.display = "none";
      formBody.style.height = "750px";
      // create p html tag for submit confirmation window
      p = document.createElement("p");
      p.innerHTML = "Merci pour votre inscription";
      formBody.append(p);
      // creation button after submit window
      confirmCloseBtn = document.createElement("button");
      confirmCloseBtn.classList.add("confirmSubmitClose");
      confirmCloseBtn.type = "button";
      confirmCloseBtn.innerHTML = "Fermer";
      formBody.append(confirmCloseBtn);
      // close event after submit window 
      const closeAfterSubmit = document.querySelector(".confirmSubmitClose");
      closeAfterSubmit.addEventListener('click', e =>{
        modalbg.style.display = "none";
        // re-display the form for the next time
        form.style.display = "block";
      })
    };

    
// verification if all input has a value
    const checkValues = () => {
      //const formDataInput = document.querySelectorAll(".formData > input");
      const formDataInput = document.querySelectorAll(".text-control");

      for (let i = 0; i < formDataInput.length; i++) {
        if (!formDataInput[i].value) {
          alert("Veuillez remplir tous les champs"); 
          return false;
        } 
      } 
      return true;
    };   

//  valid  if checkbox is checked
    const checkBoxUserCondition = () => {
      // verify if the checkbox is checked
      if (!checkboxRequired.checked) {
      alert("veuillez accepter les conditions d'utilisation");
      return false;
      }
    return true;
  };

 
// valid if one checkbox'location is checked
    const checkedLocation = () => {
      const locationsCheckBox = document.getElementsByName("location");

      for (let i=0; i < locationsCheckBox.length; i++) {
        if (locationsCheckBox[i].checked) {
          return true
        }
      }
      alert("Veuillez sélectionner une localité");
      return false;    
     }
 
   
// send submit if form is checked and has values
    function validate() {    
      // Verify all the conditions is ok for submit or display an error
      checkBoxUserCondition() && checkValues() && checkedLocation() ? afterSubmitWindows() : false;     
    };

    submitBtn.addEventListener('click', (e) => {AfterSubmitClearForm()}); 

// rest form after submit completed
    const AfterSubmitClearForm = () => {
        const frm = document.getElementsByName("reserve")[0];
      console.log(frm);
      frm.reset();
      return false 
    };


  

  
  
   
