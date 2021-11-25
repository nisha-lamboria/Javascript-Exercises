var inputText=document.querySelector("#inputtext");
var btnon=document.querySelectorAll("#on-btn");


btnon[0].addEventListener("click",increase)
btnon[1].addEventListener("click",decrease)

var initialSize=10

function increase(){
    initialSize=initialSize+2
    inputText.style.fontSize=`${initialSize}px`
    inputText.style.color="lightblue"
}

function decrease(){
    initialSize=initialSize-2
    inputText.style.fontSize=`${initialSize}px`
}