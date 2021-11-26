let inputTxt=document.getElementById('inputTxt')
let btn=document.getElementById('button')

inputTxt.addEventListener("input",btnState)

btn.disabled=true

function btnState(){
    console.log(inputTxt.value.length)
    if(inputTxt.value.length>0){
        btn.disabled=false
    }
}