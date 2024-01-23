let music = new Audio("music.mp3");
let Audioturn = new Audio("ting.mp3");
let gameOver = new Audio("gameover.mp3");
let resetbtn=document.getElementById("reset")

let turn = "X";
let isgameover=false
const changeTurn = () => {
  return turn == "X" ? "0" : "X";
};

const checkWin = () => {

    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
wins.forEach(e =>{
     
    if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
        document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
        isgameover = true
        gameOver.play()
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
        document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
        document.querySelector(".line").style.width = "20vw";
    }
})
};
let boxes = document.getElementsByClassName("box");
// music.play()
Array.from(boxes).forEach((element) => {
  element.addEventListener("click", () => {
    // console.log("click the box")
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener("click", () => {
      // console.log("clic the box")
      if (boxtext.innerText === "") {
        boxtext.innerText = turn;
        turn = changeTurn();
        Audioturn.play()
        music.play()
        checkWin();
     if(!gameOver){
        document.getElementsByClassName("info")[0].innerText =
        "Turn for " + turn;
     }
      }
    });
  });
});

resetbtn.addEventListener("click",()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
Array.from(boxtexts).forEach(element =>{
    element.innerText=""
})
isgameover=false
music.stop()
document.querySelector(".line").style.width = "0vw";
document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"

})
