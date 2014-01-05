function validateAll() {
 
  if (validateCaptcha() === false) {


    alert("Please re-enter the captcha!");
    return false;
  }
  
  else if (validateForm() === false) {
    alert("Please enter all fields.");
    return false;
  }
  
  else if (validateEmail() === false) {
    alert("Please enter a valid email address.");
  }
      
  else {
    alert("Thank you for your feedback!");
  };

} //end validateAll

function validateCaptcha() {
  var captcha1 = "I AM HUMAN";
  var captchaEntry = document.getElementById("captchaText").value;

  //validate the captcha and alert the user
  if (captcha1 !== captchaEntry.toUpperCase() ) {

    return false;
  };
  
}//end validateCaptcha

function validateForm() {
  //declare variables and load with DOM elements
  var formName = document.getElementById("nameText");
  var formEmail = document.getElementById("emailText");
  var formComments = document.getElementById("commentsText");


  //load user input into formArray
  var formArray = [formName.value, formEmail.value, formComments.value ];


  //test to see if fields are empty
  for (i = 0; i <= formArray.length-1; i++) {
    if (formArray[i].length < 1){      
      return false;
      
    }
    

  };//end for



};//end validateForm



function validateEmail() {
  var formEmail = document.getElementById("emailText").value;
  atIndex = formEmail.indexOf("@");
  dotIndex = formEmail.indexOf(".");
  //console.log(formEmail);
  //console.log(emailIndex);
  
  if (atIndex === -1) {
    return false;
  }
  
  else if (dotIndex === -1) {
    return false;
  }
  
} //end validateEmail


