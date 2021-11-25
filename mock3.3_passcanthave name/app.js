let inputName=document.getElementById("inputName")
let inputPass=document.getElementById("inputPass")
let output=document.getElementById("output")

inputPass.addEventListener('input',showMessage)

function showMessage(){
    let inputValue=inputName.value
    output.innerHTML=""
    if (inputPass.value.includes(inputValue)){
        output.innerHTML="password can't have name"
    }


}
