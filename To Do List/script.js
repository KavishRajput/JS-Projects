function task(){
//date and time
let info=new Date();
let datevalue=info.toDateString();
let timevalue=info.toLocaleTimeString();

//color
let color=["FF6500","FF204E","EEEEEE","F39F5A","9DB2BF","ED2B2A","0E8388","03C988","F73D93","D89216"];
let color_code=Math.floor(Math.random()*color.length);

//input
let input=document.querySelector(".input");
let taskText = input.value.trim();

if (taskText === "") {
    alert("Please enter a task.");
    return; // Do nothing if input is empty
}

//list
let list=document.querySelector(".list");
let listitem=document.createElement("div");
listitem.classList.add("listitem");
listitem.style.backgroundColor="#"+color[color_code];
let task_desc=document.createElement("span");
task_desc.innerText=input.value;
task_desc.classList.add("task_desc");
task_desc.contentEditable='false';
let date=document.createElement("span");
date.innerHTML=datevalue;
date.classList.add("date");
let time=document.createElement("span");
time.innerHTML=timevalue;
time.classList.add("time");
let btn_grp=document.createElement("div")
btn_grp.classList.add("btngrp");
let edit_btn=document.createElement("button");
edit_btn.innerHTML="Edit";
edit_btn.classList.add("edit_btn")
let delete_btn=document.createElement("button");
delete_btn.innerHTML="Delete";
delete_btn.classList.add("delete_btn");

//append
listitem.append(task_desc);
btn_grp.append(date);
btn_grp.append(time);
btn_grp.append(edit_btn);
btn_grp.append(delete_btn);
listitem.append(btn_grp);
list.append(listitem);

//clear input
input.value="";

//Delete Button
delete_btn.onclick=function(){
    listitem.remove();
} 

//Edit Button
edit_btn.onclick=function(){
        if(task_desc.contentEditable=='true'){
            task_desc.contentEditable='false';
            task_desc.classList.remove("task_desc_edit");
        }
        else{
            task_desc.contentEditable='true';
            task_desc.classList.add("task_desc_edit");
        }
    }
}

// Add Button
    let addbtn=document.querySelector(".add_btn");
    addbtn.addEventListener("click",task);


