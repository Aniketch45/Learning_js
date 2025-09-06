function validate()
{
    // get form values
const name= document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const mobile = document.getElementById("mnumber").value.trim();
const password = document.getElementById("password").value.trim();
const confirmPassword = document.getElementById("confirmPassword").value.trim();
const message = document.getElementById("message").value.trim();
const agree = document.getElementById("agree").checked;
const gender = document.querySelector('input[name="gender"]:checked');

// error spans
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const numberError = document.getElementById("numberError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");
const messageError = document.getElementById("messageError");
const termsError = document.getElementById("termsError");
const genderError = document.getElementById("genderError");

//clear previous Error Message
nameError.textContent= "";
emailError.textContent= "";
numberError.textContent= "";
passwordError.textContent= "";
confirmPasswordError.textContent= "";
messageError.textContent= "";
genderError.textContent= "";
termsError.textContent= ""; 

let isValid= true;

//validate fields
if(name === ""){
    nameError.textContent= "Please Enter your Name.";
    isValid= false;
}
else if(name.length<3){
    nameError.textContent= "please Enter at Least 3 Characters.";
     isValid= false;
}

//validate email
if(email ===""){
    emailError.textContent= "Please Enter Your Email.";
     isValid= false;
}
else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
    emailError.textContent= "Please Enter Valid Email Address.";
     isValid= false;
}

//validate Number
if(mobile ===""){
    numberError.textContent="Please Enter Your Number.";
     isValid= false;
}
else if(!/^\d{10}$/.test(mobile)){
    numberError.textContent= "Please Enter Valid Mobile Number";
     isValid= false;
}

//validate password
const passwordPattern =/^(?=.*[0-9])(?=.*[!@#$%^&])[A-Za-z0-9!@#$%^&]{6,}$/;
if(password ===""){
    passwordError.textContent="Please Enter a Password.";
     isValid= false;
}
else if(!passwordPattern.test(password)){
    passwordError.textContent="Password must be at least 6 characters, include a number & a special character.";
     isValid= false;
}

//validate confirm password
if(confirmPassword ===""){
    confirmPasswordError.textContent="please Enter a Confirm Password";
     isValid= false;
}
else if(confirmPassword!== password){
    confirmPasswordError.textContent="Passwords Doesn't Match.";
     isValid= false;
}

//validate message
if(message===""){
    messageError.textContent="Please Enter Your Message.";
     isValid= false;
}

//validate Gender
if(!gender){
    genderError.textContent="please Select Gender.";
     isValid= false;
}

//validate terms
if(!agree){
    termsError.textContent="You must agree to the terms and Conditions";
     isValid= false;
}

//sucess by usind alert
if(isValid){
    alert("Frorm Submitted Successfullly");
}

return isValid; //prevent form submit if invalid
}
