function validation(e){
    e.preventDefault();
    username_validation();
    password_validation();
    phone_validation();
    c_password_validation();

    if(!isUsernameValid||!isPasswordValid||!isCPasswordValid||!isPhoneValid){
        return false;
    }

    document.getElementsByName("registration_form")[0].submit();
}

document.getElementsByName("registration_form")[0].addEventListener("submit", validation);

function username_validation(){
    let userinput=document.querySelector("#username");
    let msg_username=document.querySelector(".msg_username");
    let regex_user=/^[a-zA-Z0-9._]+$/;
    let isUsernameValid=true;
    if(!userinput.value.match(regex_user)||userinput.value.length<5){
        msg_username.textContent="Please enter a valid username";
        isUsernameValid=false;
    }
    else{
        msg_username.textContent="";
    }
}

function password_validation(){
    let isPasswordValid=true;
    let passwordinput=document.querySelector("#password");
    let msg_password=document.querySelector(".msg_password");
    let regex_password=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
    
    if(!passwordinput.value.match(regex_password)){
        msg_password.textContent="Please enter valid password";
        isPasswordValid=false;
    }
    else{
        msg_password.textContent="";
    }
}

function c_password_validation(){
    let isCPasswordValid=true;
    let passwordinput=document.querySelector("#password");
    let c_passwordinput=document.querySelector("#c_password");
    let msg_cpassword=document.querySelector(".msg_cpassword");
    
    if(passwordinput.value!=c_passwordinput.value||c_passwordinput.value==""){
        msg_cpassword.textContent="Password does not match";
        isCPasswordValid=false;
    }
    else{
        msg_cpassword.textContent="";
    }
}

function phone_validation(){
    let isPhoneValid=true;
    let phoneinput=document.querySelector("#phone");
    let msg_phone=document.querySelector(".msg_phone");
    let regex_phone=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    
    if(!phoneinput.value.match(regex_phone)){
        msg_phone.textContent="Please enter valid phone number";
        isPhoneValid=false;
    }
    else{
        msg_phone.textContent="";
    }    
}
