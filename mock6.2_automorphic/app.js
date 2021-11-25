let inputNo=document.getElementById("inputNo")
let btn=document.getElementById("button")
let output=document.getElementById("output")

btn.addEventListener("click",checkAutomo)

function checkAutomo(){
    let inputVal=Number(inputNo.value)
    let lastDigit=(inputVal*inputVal)%10
    if(inputVal==lastDigit){
        output.innerHTML="automorphic"
    }
    else{
        output.innerHTML="not"
    }
}