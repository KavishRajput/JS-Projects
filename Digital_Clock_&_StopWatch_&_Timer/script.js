// Clock
function digital_watch(){
    let info= new Date();
    // Hours
    let hour=document.querySelector(".hour");
    let hours=hour.innerHTML=info.getHours()%12||12;
    hours=hours.toString().padStart(2,'0');
    
    //  Minutes
    let minute=document.querySelector(".minute");
    minute.innerHTML=info.getMinutes().toString().padStart(2,'0');
    
    // Seconds
    let second=document.querySelector(".second");
    second.innerHTML=info.getSeconds().toString().padStart(2,'0');

    // AM && PM
    let am_pm=document.querySelector(".am_pm");
    let temp_hour = info.getHours();
    if (temp_hour >= 12) {
    am_pm.innerHTML = "PM";
    } else {
    am_pm.innerHTML = "AM";
    }
    
    // Day
    let day=document.querySelector(".day");
    day.innerHTML=info.getDay();
    let day_list=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    day.innerHTML=day_list[day.innerHTML];
    
    // Date
    let date=document.querySelector(".date");
    date.innerHTML=info.getDate();
    
    // Months
    let month=document.querySelector(".month");
    month.innerHTML=info.getMonth();
    let month_list=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    month.innerHTML=month_list[month.innerHTML];
    
    // Year
    let year=document.querySelector(".year");
    year.innerHTML=info.getFullYear();
}

// Set Interval 
setInterval(digital_watch,1000);

//StopWatch ------------------------------------------------------------------------------------------------------------------------


let hours = 0;
let mins = 0;
let secs = 0;

//Working
function stopwatch(){
    document.querySelector(".hours").innerHTML=hours.toString().padStart(2,"0");
    document.querySelector(".mins").innerHTML=mins.toString().padStart(2,"0");
    document.querySelector(".secs").innerHTML=secs.toString().padStart(2,"0");
    secs++;
    if(secs==60){
        mins++;
        secs=0;
    }
    if(mins==60){
        hours++;
        mins=0;
    }
}

//Reset Button
function reset(){
    hours = 0;
    mins = 0;
    secs = 0;
}

//Interval
let var_interval="";
function interval(){
    var_interval=setInterval(stopwatch,1000);
}

//ClearInterval
function stop_clearinterval(){
    clearInterval(var_interval);
}

//ClearInterval For Reset
function reset_clearinterval(){
    clearInterval(var_interval);
    setTimeout(stopwatch,100);
}


//Buttons
document.querySelector(".start").addEventListener("click",interval);
document.querySelector(".stop").addEventListener("click",stop_clearinterval);
document.querySelector(".reset").addEventListener("click",reset);
document.querySelector(".reset").addEventListener("click",reset_clearinterval);

//Timer ------------------------------------------------------------------------------------------------------------------------
// Timer container
let timer_1 = document.querySelector(".timer");

// Title
let title3 = document.createElement("div");
title3.innerHTML = "Timer";
title3.classList.add("title3");
timer_1.append(title3);

// Timer elements
let timer_hours = document.createElement("span");
timer_hours.innerText = "00";
timer_hours.contentEditable = "true";
timer_1.append(timer_hours);

let colon1 = document.createElement("span");
colon1.innerText = " : ";
timer_1.append(colon1);

let timer_mins = document.createElement("span");
timer_mins.innerHTML = "00";
timer_mins.contentEditable = "true";
timer_1.append(timer_mins);

let colon2 = document.createElement("span");
colon2.innerText = " : ";
timer_1.append(colon2);

let timer_secs = document.createElement("span");
timer_secs.innerHTML = "00";
timer_secs.contentEditable = "true";
timer_1.append(timer_secs);

let br1 = document.createElement("br");
timer_1.append(br1);

// Start and Cancel buttons
let Timerstartbtn = document.createElement("button");
Timerstartbtn.innerHTML = "Start";
timer_1.append(Timerstartbtn);

let Timercancelbtn = document.createElement("button");
Timercancelbtn.innerHTML = "Cancel";
timer_1.append(Timercancelbtn);

let br2 = document.createElement("br");
timer_1.append(br2);

let audio = document.createElement("audio");
audio.setAttribute("autoplay","autoplay")
audio.setAttribute("controls", "controls");
audio.classList.add("audio");
audio.classList.add("audio_hidden");
let source = document.createElement("source");
source.setAttribute("src","https://dl.prokerala.com/downloads/ringtones/files/dl/mp3/7120-download-iphone-6-original-ringtone-42676.mp3");
source.setAttribute("type","audio/mpeg");
timer_1.append(audio);
audio.append(source);

// Initialize timer variables
let interval2;
let run = false;

// Timer function
function timer() {
    let hours = parseInt(timer_hours.innerText);
    let minutes = parseInt(timer_mins.innerText);
    let seconds = parseInt(timer_secs.innerText);

    // Decrease seconds
    if (seconds > 0) {
        seconds--;
    } else {
        if (minutes > 0) {
            minutes--;
            seconds = 59;
        } else if (hours > 0) {
            hours--;
            minutes = 59;
            seconds = 59;
        } else {
            // Stop the timer when it reaches 00:00:00
            stopTimer();
            audio.classList.remove("audio_hidden");
            audio.play();
        }
    }

    // Update the timer display
    timer_hours.innerText = String(hours).padStart(2, "0");
    timer_mins.innerText = String(minutes).padStart(2, "0");
    timer_secs.innerText = String(seconds).padStart(2, "0");
}

// Start Timer
function startTimer() {
    if (!run) {
        interval2 = setInterval(timer, 1000); 
        run = true;
        audio.classList.add("audio_hidden");
        audio.pause();
    }
}

// Stop Timer
function stopTimer() {
    clearInterval(interval2);
    run = false;
}

// Reset Timer (Cancel)
function resetTimer() {
    stopTimer();
    audio.pause();
    timer_hours.innerText = "00";
    timer_mins.innerText = "00";
    timer_secs.innerText = "00";
    audio.classList.add("audio_hidden");
}

// Button event listeners
Timerstartbtn.addEventListener("click", startTimer);
Timercancelbtn.addEventListener("click", resetTimer);
