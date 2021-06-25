let form = document.querySelector("form");

let usernameError = "";

let nameError = "";

let emailError = "";

let phoneError = "";

let passwordError = ""

function handleSubmit(event){
   event.preventDefault();
   console.dir(event.target);

//    username validation

   let usernameElem = event.target.elements.Username;

   if(usernameElem.value === "") {
      usernameError = "can't be empty";
    } else if(usernameElem.value.length < 4) {
       usernameError = "Username can't be less than 4 characters";
    } else {
      usernameError ="";
    }
    usernameElem.nextElementSibling.innerText = usernameError;

    // Name validation 
    let nameEle = event.target.elements.name;

    if(nameEle.value === "") {
        nameError = "can't be empty";
      } else if(nameError.value  !== NaN) {
        nameError = "Name can't be numbers";
      } else {
        nameError ="";
      }
      nameEle.nextElementSibling.innerText = nameError;
  
    // Email Validation 
    let emailEle = event.target.elements.email;

    if(emailEle.value === "") {
        emailError = "can't be empty";
      } else if(emailEle.value.length <= 5) {
        emailError = "Not a valid email";
      } else {
        emailError ="";
      }
      emailEle.nextElementSibling.innerText = emailError;


    // Phone Validation 
    let phoneEle = event.target.elements.number;

    if(phoneEle.value === "") {
        phoneError = "can't be empty";
      } else if(phoneEle.value === NaN) {
        phoneError = "Phone numbers can only be a number";
      } else if (phoneEle.value.length < 7) {
        phoneError ="Length of phone number can't be less than 7";
      } else {
        phoneError ="";
      }
      phoneEle.nextElementSibling.innerText = phoneError;
      
    
    // Password and confirm password Validation 
    let passwordEle = event.target.elements.password;

    let confirmEle = event.target.elements.confirm;

    if(passwordEle.value === "") {
        passwordEle = "can't be empty";
      } else if(passwordEle.value === confirmEle) {
        passwordEle = "Phone numbers can only be a number";
      } else {
        passwordEle = "";
      }
      passwordEle.nextElementSibling.innerText = passwordError;
    
    
    
}

form.addEventListener("submit", handleSubmit);


// Username can't be less than 4 characters
// Name can't be numbers
// Email must contain the symbol `@`
// Email must be at least 6 characters
// Phone numbers can only be a number
// Length of phone number can't be less than 7
// Password and confirm password must be same