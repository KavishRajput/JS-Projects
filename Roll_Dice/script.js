let image1=document.querySelector("#img1");
image1.classList.add("filter");
document.querySelector("#btn").addEventListener("click",function(){
let player1score=Math.trunc(Math.random()*6)+1;
let player2score=Math.trunc(Math.random()*6)+1;
let image1=document.querySelector("#img1");
    image1.src="red"+player1score+".png";
let image2=document.querySelector("#img2");
    image2.src="red"+player2score+".png";
if(player1score>player2score){ 
    document.querySelector(".result").innerHTML="Player 1 Win"; 
    document.querySelector(".result").style.color="Blue"; 
}
else if(player1score<player2score){
    document.querySelector(".result").innerHTML="Player 2 Win";
    document.querySelector(".result").style.color="red"; 
}
else{
    document.querySelector(".result").innerHTML="Match Tie!";
    document.querySelector(".result").style.color="green"; 
}

})