let btns=document.getElementsByClassName("button")
let inputTxt=document.getElementById("inputTxt")

Array.from(btns).forEach(function(element){
    element.addEventListener("click",()=>changeColor(element.innerText))
})

function changeColor(btnTxt){
    if(btnTxt==="red"){
        inputTxt.style.color='red'
    }
}