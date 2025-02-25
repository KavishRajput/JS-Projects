//code
let Captchabox = document.querySelector("#Captcha");
let length = 6;
let allchar="ABCDEFGHIJKLMOPQRTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

//Generate captcha Function
function generate_captcha(){
    let password = "";
    while(length>password.length){
        password += allchar[Math.floor(Math.random()*allchar.length)];}
        Captchabox.value=password;
}
generate_captcha();
document.querySelector("svg").addEventListener("click",generate_captcha);