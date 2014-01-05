function validateForm(){
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
    

   // console.log(i + " " + formArray[i]);
  };//end for



  //test array values pulling correctly from the DOM
  //console.log(formArray);

};//end validateForm


function validateCaptcha(){
  //declare variables
  var captcha1 = "I AM HUMAN";
  var captchaEntry = document.getElementById("captchaText").value;

  //validate the captcha and alert the user
  if (captcha1 === captchaEntry.toUpperCase() ) {
    //alert("You entered the captcha correctly!");
  }

  else {
    alert("Please re-enter the captcha!");
    return false;
  };
  
  if (validateForm() === false) {
    alert("Please enter all fields.");
    return false;
    
  }
  else {
    alert("Thank you for your feedback!");
  }
} //end validateCaptcha




