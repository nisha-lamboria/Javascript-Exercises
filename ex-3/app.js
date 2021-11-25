var inputText=document.querySelector("#inputtext");
var btnon=document.querySelectorAll(".on-btn");
var outputEle=document.querySelector("#output");

btnon[0].addEventListener("click",h1Change)
btnon[1].addEventListener("click",h2Change)


var inputRefer=inputText.addEventListener("click",()=>inputText.value)

function h1Change(){
    console.log(inputText.value)
    // h1text=displayText(`<h1>${inputText.value}</h1>`)
    // console.log(h1text)
    inputText.value=`<h2>${inputText.value}</h2>`
}

function h2Change(){
    h2text=displayText(inputText.value)

}

function displayText(text){
    outputEle.innerHTML=`<h2>${text}</h2>`
    return text
}


