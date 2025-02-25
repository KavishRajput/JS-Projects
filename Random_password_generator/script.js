//code
let inputbox = document.querySelector("#input");
let length = 11;
let uppercase = "ABCDEFGHIJKLMOPQRTUVWXYZ";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let number = "0123456789";
let special = "!@#$%^&*()_+-={}:<>?";
let allchar=uppercase+lowercase+number+special;

//Generate Password Function
function generate_password(){
    let password = "";
    password += uppercase[Math.floor(Math.random()*uppercase.length)];
    password += lowercase[Math.floor(Math.random()*lowercase.length)];
    password += number[Math.floor(Math.random()*number.length)];
    password += special[Math.floor(Math.random()*special.length)];
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
