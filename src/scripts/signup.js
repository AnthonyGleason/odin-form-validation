let Signup = function (){

    //Form elements

    this.email;
    this.country;
    this.zip;
    this.password;
    this.passwordConfirm;

    //Error messages array

    this.messages=[];

    //DOM elements

    this.form=document.querySelector('.sign-up-form');
    this.submitButton=document.querySelector('.submit-form-button');
    this.messagesDiv=document.querySelector('.messages');
    
    //DOM input elements
    this.emailInput=document.querySelector('#email');
    this.countryInput=document.querySelector('#country');
    this.zipInput=document.querySelector('#zip');
    this.passInput=document.querySelector('#password');
    this.passConfInput=document.querySelector('#passwordConfirm');
};

Signup.prototype.addMessage = function (string){
    this.messages.push(string);
};

Signup.prototype.displayMessages = function(){

    //display the message

    this.messagesDiv.textContent=this.messages.join(', ');

    //clear the messages array

    this.messages=[];
};

Signup.prototype.getCurrentForm = function (){

    //Reads the form inputs

    this.email=email.value;
    this.country=country.value;
    this.zip=zip.value;
    this.password=password.value;
    this.passwordConfirm=passwordConfirm.value
};

Signup.prototype.submitForm = function (){
    let isValid=false;
    //reset the messages display

    this.messagesDiv.textContent="";

    //Store the current form information in SIGNUPCONTROLLER properties
    
    this.getCurrentForm();

    //Validate the form

    if (this.validateForm()){
        isValid=true;
    }

    //Display messages

    this.displayMessages();
    
    return isValid;
};

//form input field styling

Signup.prototype.invalidEmailField = function (){
    this.emailInput.style.border='2px solid red';
};

Signup.prototype.invalidCountryField = function (){
    this.countryInput.style.border='2px solid red';
};

Signup.prototype.invalidZipField = function (){
    this.zipInput.style.border='2px solid red';
};

Signup.prototype.invalidPassField = function (){
    this.passInput.style.border='2px solid red';
};

Signup.prototype.invalidPassConfField = function (){
    this.passConfInput.style.border='2px solid red';
};

Signup.prototype.validEmailField = function (){
    this.emailInput.style.border='2px solid grey';
};

Signup.prototype.validCountryField = function (){
    this.countryInput.style.border='2px solid grey';
};

Signup.prototype.validZipField = function (){
    this.zipInput.style.border='2px solid grey';
};

Signup.prototype.validPassField = function (){
    this.passInput.style.border='2px solid grey';
};

Signup.prototype.validPassConfField = function (){
    this.passConfInput.style.border='2px solid grey';
};
//form validation

Signup.prototype.validateEmail = function (){
    let isValid=true;
    if (this.email=="" || this.email==null){
        this.addMessage('Email field should not be blank');
        isValid=false;
    }
    if (!this.email.includes('@') || !this.email.includes('.com')){
        this.addMessage('Email is not a valid email');
        isValid=false;
    };

    //Sets the appropriate styling to the border of the input
    isValid===true ? this.validEmailField() : this.invalidEmailField(); 
    return isValid;
};

Signup.prototype.validateCountry = function (){
    let isValid=true;
    if (this.country=="" || this.country==null){
        this.addMessage('Country field should not be blank');
        isValid=false;
    };

    //Sets the appropriate styling to the border of the input
    isValid===true ? this.validCountryField() : this.invalidCountryField(); 
    return isValid;
};

Signup.prototype.validateZip = function (){
    let isValid=true;
    if (this.zip.length!=5){
        this.addMessage('Zip Code should be 5 digits');
        isValid=false;
    };

    //Sets the appropriate styling to the border of the input
    isValid===true ? this.validZipField() : this.invalidZipField(); 
    return isValid;
};

Signup.prototype.validatePassword = function (){
    let isPassValid=true;
    let isPassConfValid=true;

    //Check to see if both password fields are equal to each other

    if(this.password!=this.passwordConfirm){
        this.addMessage('Passwords do not match');
        isPassValid=false;
        isPassConfValid=false;
    };
    if (this.password=="" || this.password==null){
        this.addMessage('Password field cannot be blank');
        isPassValid=false;
    };
    if (this.passwordConfirm==""|| this.passwordConfirm==null){
        this.addMessage('Password Confirm field cannot be blank');
        isPassConfValid=false;
    };

    //Sets the appropriate styling to the border of the input
    isPassValid===true ? this.validPassField() : this.invalidPassField(); 
    isPassConfValid===true ? this.validPassConfField() : this.invalidPassConfField(); 

    //If one of the two password fields are invalid return false
    if (isPassValid===false || isPassConfValid===false){
        return false;
    }else{
        return true;
    }
};

Signup.prototype.validateForm = function (){
    //might want to review this isFormValid can get overwritten
    let isFormValid=true;

    //Validation goes here
    if (this.validateEmail()==false){
        isFormValid=false;
    };
    if (this.validateCountry()==false){
        isFormValid=false;
    };
    if (this.validateZip()==false){
        isFormValid=false;
    };
    if (this.validatePassword()==false){
        isFormValid=false;
    };

    return isFormValid;
};

export default Signup;