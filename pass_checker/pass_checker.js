//take the input password
var inputEle=document.querySelector("pass-input"); 
var reasons=document.querySelector("reasons");
var strengthMeter=document.querySelector("strength-meter");
//show strength percentage
//show reasons for what needs to be added to the password

//on taking input, trigger strength percentage
//and reasons password

//when input entered call a function which checks 
//1 length,2 special chars,3 uppercase,4 lowercase,5 digit
//according to the conditions if met,keep removing reasons
function checkStrength(){
    if(inputEle.length<8){
        reasons.innerHTML="Your password could be longer"
    }


}



inputEle.addEventListener("input",checkStrength);





