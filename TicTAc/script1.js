let gameMusic = new Audio("music.mp3");
let winmusic = new Audio("gameover.mp3");
let playMusic = new Audio("ting.mp3");
let turn = "X";
let gameover=false
const ChangeTurn = () => {
  return (turn = "X" ? "0" : "X");
};

const checkWin=()=>{

}


let box=document.getElementsByClassName("box")
Array.from (box).forEach(element =>{
element.addEventListener("click",()=>{
    let boxtext=element.querySelector(".boxtext")
    if(boxtext === ""){
        boxtext.innerText=turn
        turn=changeTurn()
        playMusic()
checkWin()
if(!gameover){
    // document.getElementById("info")[0].innerText="turn to" + turn
    document.getElementsByClassName("info")[0].innerText = turn
}

    }
})
})