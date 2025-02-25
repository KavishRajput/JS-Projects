let array = [
    {
        name: "Aam Jahe Munde",
        artist: "Permish Verma",
        imageurl: "https://i.pinimg.com/736x/96/1f/d2/961fd291d5b0a0ce2f459bf7a69c302f.jpg",
        path: "Music Player\Aam Jahe Munde _ Parmish Verma feat Pardhaan _ Desi Crew _ Laddi Chahal [muds1gFUTN8].mp3"
    },
    {
        name: "Mitti De Tibbe",
        artist: "Kaka",
        imageurl: "https://i.pinimg.com/736x/1c/45/de/1c45de656a4bfea2e1b72c092d7e140e.jpg",
        path: "Music Player\KAKA New Punjabi Song - Mitti De Tibbe (Official Video) _ Afsha Khan _ Latest Punjabi Songs 2022 [dRr_eF3YifA].mp3"
    },
    {
        name: "Dill Di Gall",
        artist: "Satender Sartaaj",
        imageurl: "https://i.pinimg.com/474x/fb/63/f1/fb63f1e3fbd7124c0baba69a0d82b815.jpg",
        path: "Music Player\Dila'n Di Gall _ Satinder Sartaaj _ Kali Jotta_ Neeru Bajwa, Wamiqa Gabbi_ Latest Punjabi Songs 2023 [v8sipOx9-7k].mp3"
    }
];

let play = document.querySelector(".play").addEventListener("click",load);

let current_index=0;

function load(index){
    for(let index=0;index<array.length;index++){
        let name=document.querySelector(".name");
        name.innerHTML=array[index].name;
        let artist=document.querySelector(".artist");
        artist.innerHTML=array[index].artist;
        let image=document.querySelector("img");
        image.src=array[index].imageurl;
        let source = document.querySelector("source");
        source.src=array[index].path;
    }
}
