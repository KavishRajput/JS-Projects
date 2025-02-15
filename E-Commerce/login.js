function validation(){
    let userinput=document.querySelector("#username");
    let passwordinput=document.querySelector("#password");
    if(userinput==""){
        alert("Please enter your username");
        return false;
    }
    if(passwordinput==""){
        alert("Please enter your password");
    }
}