
let input=document.getElementById('input')
let inputOtp=document.getElementById('inputOtp')
let btn=document.getElementById('button')
let btnOtp=document.getElementById('btnOtp')
let outputEle=document.getElementById('output')

btn.addEventListener("click",checkOtp)

function checkOtp(){
    urlInput = urlgenerator()
    fetch(urlInput)
    .then(res=>res.json())
    .then(json=>{outputEle.innerHTML=json.otp
        btnOtp.addEventListener("click",()=>validateOtp(json.otp)) 
    })
    
}

function urlgenerator(){
    let url="https://otpgenerator.ishanjirety.repl.co/get-otp?name="
    url=url + input.value
    return url  
}



function validateOtp(takeOtp){
    if(inputOtp.value===takeOtp){
        outputEle.innerHTML='success'
    }else{
        outputEle.innerHTML='failure'
    }

}
