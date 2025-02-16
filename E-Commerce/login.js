function validation(){
    let userinput=document.querySelector("#username");
    let msg_username=document.querySelector(".msg_username");
    let passwordinput=document.querySelector("#password");
    let msg_password=document.querySelector(".msg_password");
    let regex_user=/^[a-zA-Z0-9._]+$/;
    let regex_password=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
    if(!userinput.value.match(regex_user)){
        msg_username.textContent="Please enter a valid username";
        return false;
    }
    else{
        msg_username.textContent="";
    }

    if(!passwordinput.value.match(regex_password)){
        msg_password.textContent="Please enter valid password";
        return false;
    }
    else{
        msg_password.textContent="";
    }
}