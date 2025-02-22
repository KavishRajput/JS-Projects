function validation(e){
    e.preventDefault();
    
    let userinput = document.querySelector("#username");
    let msg_username = document.querySelector(".msg_username");
    let passwordinput = document.querySelector("#password");
    let msg_password = document.querySelector(".msg_password");
    
    let regex_user = /^[a-zA-Z0-9._]+$/;
    let regex_password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
    
    // Validate username
    let isUsernameValid = true;
    if (!userinput.value.match(regex_user)) {
        msg_username.textContent = "Please enter a valid username";
        isUsernameValid = false;
    } else {
        msg_username.innerHTML = "";
    }
    
    // Validate password
    let isPasswordValid = true;
    if (!passwordinput.value.match(regex_password)) {
        msg_password.textContent = "Please enter a valid password";
        isPasswordValid = false;
    } else {
        msg_password.innerHTML = "";
    }
    
    // If any validation fails, return false
    if (!isUsernameValid || !isPasswordValid) {
        return false;
    }

    // If everything is valid, you can submit the form here
    document.getElementsByName("login_form")[0].submit();
}

document.getElementsByName("login_form")[0].addEventListener("submit", validation);
