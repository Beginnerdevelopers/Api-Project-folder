let turn = "X"
let isgameover=false

const turnChange= ()=>{
    return turn  =  'X' ? '0' : "X"
}
const checkWin=()=>{

}
let boxes=document.getElementsByClassName("box")
Array.from(boxes).forEach(element =>{
    let boxtext=document.querySelector(".boxtext")
    boxtext.addEventListener("click",()=>{
        console.log(element)
    })
})
