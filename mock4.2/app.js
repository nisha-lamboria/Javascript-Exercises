// Q1) Create 2 buttons with text YJHD and ZNMD.On the click of a button, call given API with query as same as the button text, and display the message you get on the screen.API - https: //mock-practice.prakhar10v.repl.co/bollywood?name=Eg - Clicking on button YJHD will make a call to https://mock-practice.prakhar10v.repl.co/bollywood?name=YJHD .

let btns=document.getElementsByClassName("button")
let outEle=document.getElementById("output")

Array.from(btns).forEach(function(element){
    element.addEventListener("click",()=>showMessage(element.innerText))
})

function showMessage(btntext){
    let url="https://mock-practice.prakhar10v.repl.co/bollywood?name="
    url=url+btntext
    fetch(url)
    .then(res=>res.json())
    .then(json=>{
        console.log(json)
        outEle.innerHTML=json.message
    })

}