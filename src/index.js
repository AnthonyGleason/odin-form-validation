import "./styles/styles.css";
import Signup from "./scripts/signup.js";

//initalize the controller

let SIGNUPCONTROLLER = new Signup();

//add the click event listener to the sign up button

SIGNUPCONTROLLER.submitButton.addEventListener('click', ()=>{
   let isValid = SIGNUPCONTROLLER.submitForm();

    //if the form is valid display high five message
    
    if (isValid){
        SIGNUPCONTROLLER.addMessage('High five! The form is valid!')
    }

    //Display messages

    SIGNUPCONTROLLER.displayMessages();
});

//get all input elements from within the form

SIGNUPCONTROLLER.form.querySelectorAll('input').forEach((inputField)=>{
    
    //add an event listener to each input which listens for a keypress

    inputField.addEventListener('input', ()=>{
        SIGNUPCONTROLLER.submitForm();
    });
});

//need to setup css border color stuff in the individual validation functions
//buy a whiteboard