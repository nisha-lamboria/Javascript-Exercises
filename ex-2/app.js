let inputTxt=document.getElementById("inputTxt")
let btns=document.getElementsByClassName("button")
let output=document.getElementById("output")
let fontSize=16

Array.from(btns).forEach(function(element){
    element.addEventListener("click",function(){
        changeFontSize(element.innerText)
    })
})


function changeFontSize(btnTxt){

    if(btnTxt==="+"){
        fontSize+=2
    }else if(btnTxt==="-"){
        fontSize-=2
    }
    output.style.fontSize=`${fontSize}px`
}

inputTxt.addEventListener("input",()=>{
    output.innerText=`${inputTxt.value}`
    output.style.fontSize=`${fontSize}px`

})