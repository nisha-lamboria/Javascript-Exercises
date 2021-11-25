let inputName=document.getElementById("inputName")
let btn=document.getElementById("button")
let outEle=document.getElementById("output")

btn.addEventListener("click",showMessage)

function showMessage(){
    let inputNameVal=inputName.value
    if(inputNameVal==="Tanvi"){
        outEle.innerHTML="She is the best CEO ever!"
    }else if(inputNameVal==="Tanay"){
        outEle.innerHTML="He is our FUNNY mentor!"
    }
}
