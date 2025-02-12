                                                                                                                                    //Input Box Values
                                                                                                                                    let input = document.querySelector(".input");
                                                                                                                                    let duedate = document.querySelector(".duedate");
                                                                                                                                    let duetime = document.querySelector(".duetime");


//Function For Uploading Data
function upload() {

    // Get current date and time
    let info = new Date();
    let date = info.toDateString();
    let time = info.toLocaleTimeString();

    validation();
    // Create a task object
    let task = {
        taskdesc: input.value,
        duedate: duedate.value,
        duetime: duetime.value,
        currentdate: date,
        currenttime: time,
    };

    //Take Data From Local Storage
    let data = JSON.parse(localStorage.getItem('Task')) || [];
    
    //Add New Data
    data.push(task);
    
    //Upload Data To Local Storage
    localStorage.setItem('Task', JSON.stringify(data));

    blankInput();
    removeOldData();
}

                                                                                                                                        //Function For Blank Input After Entry
                                                                                                                                        function blankInput() {
                                                                                                                                            input.value="";
                                                                                                                                            duedate.value="";
                                                                                                                                            duetime.value="";
                                                                                                                                        }

                                                                                                                                        //Remove Old Data
                                                                                                                                        function removeOldData() {
                                                                                                                                            let ol=document.querySelector(".ol");
                                                                                                                                            ol.innerHTML="";
                                                                                                                                        }

//Function For Displaying Data
function display(){
    //Again Get All Data
    let alldata = JSON.parse(localStorage.getItem('Task'));
    console.log(alldata);
    console.log(alldata.length);
    //Display Data
    for(let i=0;i<alldata.length;i++){
        let ol=document.querySelector(".ol");
        let li=document.createElement("li");
        li.classList.add("h");
        let taskdesc=document.createElement("span");
        taskdesc.innerHTML=alldata[i].taskdesc;
        taskdesc.contentEditable='false';
        taskdesc.classList.add("h2");
        let duedate=document.createElement("span");
        duedate.innerHTML=alldata[i].duedate;
        duedate.contentEditable='false';
        duedate.classList.add("h2");
        let duetime=document.createElement("span");
        duetime.innerHTML=alldata[i].duetime;
        duetime.contentEditable='false';
        duetime.classList.add("h2");
        let currentdate=document.createElement("span");
        currentdate.innerHTML=alldata[i].currentdate;
        currentdate.classList.add("h2");
        let currenttime=document.createElement("span");
        currenttime.innerHTML=alldata[i].currenttime;
        currenttime.classList.add("h2");
        let editbtn=document.createElement("button");
        editbtn.innerHTML="Edit";
        editbtn.classList.add("h2");
        let deletebtn=document.createElement("button");
        deletebtn.innerHTML="Delete";
        deletebtn.classList.add("h2");
        
        //Append
        ol.appendChild(li);
        li.append(taskdesc,duedate,duetime,currentdate,currenttime,editbtn,deletebtn);

    //Delete
    deletebtn.onclick = function () {
        alldata.splice(i, 1);
        localStorage.setItem('Task', JSON.stringify(alldata));
        removeOldData();
        display();
    };

    //Edit
    editbtn.onclick = function () {
        if(taskdesc.contentEditable=='true'){
            taskdesc.contentEditable='false';
            duedate.contentEditable='false';
            duetime.contentEditable='false';
            taskdesc.classList.remove("taskedit");
            duedate.classList.remove("taskedit");
            duetime.classList.remove("taskedit");

            let newtaskdesk=taskdesc.innerHTML;
            let newduedate=duedate.innerHTML;
            let newduetime=duetime.innerHTML;
            alldata[i].taskdesc = newtaskdesk;
            alldata[i].duedate = newduedate;
            alldata[i].duetime = newduetime;
            
            localStorage.setItem('Task', JSON.stringify(alldata));
            removeOldData();
            display();
        }
    
        else{
            taskdesc.contentEditable='true';
            duedate.contentEditable='true';
            duetime.contentEditable='true';
            taskdesc.classList.add("taskedit");
            duedate.classList.add("taskedit");
            duetime.classList.add("taskedit");

        } 
    }
    }
}


                                                                                                                                //Function For Display Old Data
                                                                                                                                let olddata=JSON.parse(localStorage.getItem('Task'));
                                                                                                                                console.log(olddata);
                                                                                                                                if(olddata!==null){
                                                                                                                                    display();
                                                                                                                                }

//Combine All Function
function combine(){
    upload();
    display();
}

                                                                                                                            //Add Button
                                                                                                                            let add = document.querySelector(".add");
                                                                                                                            add.addEventListener("click", combine);


//Validation
function validation() {
    let taskdesc = document.querySelector(".input");
    let duedate = document.querySelector(".duedate");
    let duetime = document.querySelector(".duetime");
    let inputerror = document.querySelector(".input_error");
    let duedateerror = document.querySelector(".duedate_error");
    let duetimeerror = document.querySelector(".duetime_error");

    // Clear previous errors
    inputerror.classList.remove("error");
    duedateerror.classList.remove("error");
    duetimeerror.classList.remove("error");
    inputerror.innerHTML = '';
    duedateerror.innerHTML = '';
    duetimeerror.innerHTML = '';

    // Validation
    if (taskdesc.value == "") {
        inputerror.classList.add("error");
        inputerror.innerHTML = "Please Enter Any Task!";
        return false;
    }
    if (duedate.value == "") {
        duedateerror.classList.add("error");
        duedateerror.innerHTML = "Please Enter Date!";
        return false;
    }
    if (duetime.value == "") {
        duetimeerror.classList.add("error");
        duetimeerror.innerHTML = "Please Enter Time!";
        return false;
    }
    
}


