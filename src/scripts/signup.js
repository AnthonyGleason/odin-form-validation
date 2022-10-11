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
    return isValid;
};

Signup.prototype.validateCountry = function (){
    let isValid=true;
    if (this.country=="" || this.country==null){
        this.addMessage('Country field should not be blank');
        isValid=false;
    };
    return isValid;
};

Signup.prototype.validateZip = function (){
    let isValid=true;
    if (this.zip.length!=5){
        this.addMessage('Zip Code should be 5 digits');
        isValid=false;
    };
    return isValid;
};

Signup.prototype.validatePassword = function (){
    let isValid=true;

    //Check to see if both password fields are equal to each other

    if(this.password!=this.passwordConfirm){
        this.addMessage('Passwords do not match');
        isValid=false;
    };
    if (this.password=="" || this.password==null){
        this.addMessage('Password field cannot be blank');
        isValid=false;
    };
    if (this.passwordConfirm==""|| this.passwordConfirm==null){
        this.addMessage('Password Confirm field cannot be blank');
        isValid=false;
    };
    return isValid;
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