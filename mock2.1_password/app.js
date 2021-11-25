let passInput=document.getElementById('password')
let output=document.getElementById('showError')

passInput.addEventListener('input',showOutput)

function showOutput(){
    output.innerHTML=""
    if(passInput.value.length<10){
        output.innerHTML='your password can be stronger'
    }
}