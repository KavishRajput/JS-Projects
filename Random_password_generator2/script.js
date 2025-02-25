//code
let inputbox = document.querySelector("#input");
let length = 11;
let allchar="ABCDEFGHIJKLMOPQRTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}:<>?";

//Generate Password Function
function generate_password(){
    let password = "";
    while(length>password.length){
        password += allchar[Math.floor(Math.random()*allchar.length)];}
        inputbox.value=password;
}
document.querySelector("button").addEventListener("click",generate_password);

//Copy Password
function copy(){
    inputbox.select();
    document.execCommand("copy");
}
document.querySelector("svg").addEventListener("click",copy);
