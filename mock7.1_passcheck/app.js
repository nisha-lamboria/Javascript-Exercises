let input1=document.getElementById("input1")
let input2=document.getElementById("input2")
let btn=document.getElementById("button")
let outEle=document.getElementById("output")

btn.addEventListener("click",checkPass)

function checkPass(){
    let inputVal1=input1.value
    let inputVal2=input2.value
    if(inputVal1==inputVal2){
        outEle.innerHTML="success"
    }else{
        outEle.innerHTML="failure"
    }
}