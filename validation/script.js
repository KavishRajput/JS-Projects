function validation(e){
    e.preventDefault();
    login_validation();
    registration_validation();
   
}
document.getElementsByName("registration_form")[0].addEventListener("submit",validation);
document.getElementsByName("login_form")[0].addEventListener("submit",validation);


function login_validation(){
    let loginuser=document.querySelector(".loginuser");
    let msg_loginuser=document.querySelector(".msg_loginuser");
    msg_loginuser.classList.add("msg_loginuser");
    let loginpass=document.querySelector(".loginpass");
    let msg_loginpass=document.querySelector(".msg_loginpass");
    msg_loginpass.classList.add("msg_loginpass");
    let regex_user=/^[a-zA-Z0-9._]+$/;
    let regex_password=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
    
    let isUsernameValid=true;
    if(!loginuser.value.match(regex_user)){
        msg_loginuser.textContent="Please enter a valid username";
        isUsernameValid=false;
    }
    else{
        msg_loginuser.textContent="";
    }

    let isPasswordValid=true;
    if(!loginpass.value.match(regex_password)){
        msg_loginpass.textContent="Please enter valid password";
        isPasswordValid=false;
    }
    else{
        msg_loginpass.textContent="";
    }

    if(!isUsernameValid||!isPasswordValid){
        return false;
    }
    document.getElementsByName("login_form")[0].submit();
}

function registration_validation(){
    username_validation();
    password_validation();
    phone_validation();
    c_password_validation();
    if(!isUsernameValid||!isPasswordValid||!isCPasswordValid||!isPhoneValid){
        return false;
    }

    document.getElementsByName("registration_form")[0].submit();
}

function username_validation(){
    let userinput=document.querySelector(".signuser");
    let msg_username=document.querySelector(".msg_signuser");
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
    let passwordinput=document.querySelector(".signpass");
    let msg_password=document.querySelector(".msg_signpass");
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
    let passwordinput=document.querySelector(".signpass");
    let c_passwordinput=document.querySelector(".signcpass");
    let msg_cpassword=document.querySelector(".msg_signcpass");
    
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
    let phoneinput=document.querySelector(".signphone");
    let msg_phone=document.querySelector(".msg_signphone");
    let regex_phone=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    
    if(!phoneinput.value.match(regex_phone)){
        msg_phone.textContent="Please enter valid phone number";
        isPhoneValid=false;
    }
    else{
        msg_phone.textContent="";
    }    
}
