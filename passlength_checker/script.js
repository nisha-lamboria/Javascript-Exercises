var passwordInput=document.querySelector("#input")
var reason=document.querySelector(".reason")
var submitBtn=document.querySelector("#submit")

console.log(`${passwordInput.value.length}`)

passwordInput.addEventListener("input",()=>checkPassword(passwordInput.value.length))

function showReason(message){
    return reason.innerHTML=message

}

submitBtn.disabled=true

function btnState(activestatus){
    submitBtn.disabled=activestatus
    
}

function setColor(color){
    passwordInput.style.backgroundColor=color

}

function checkPassword(passLength){
    console.log(`${passwordInput.value}`)
    if(passLength<10){
        showReason("weak password")
        btnState(true)
        setColor("red")    
    }
    else {
        showReason("success")
        btnState(false)
        setColor("green")  
    } 
}



