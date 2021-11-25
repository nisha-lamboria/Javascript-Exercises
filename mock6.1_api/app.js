

let btn=document.getElementById("button")
let outputEle=document.getElementById("output")

btn.addEventListener("click",showOutput)

function showOutput(){
    let url="https://jsonplaceholder.typicode.com/todos"
    fetch(url)
    .then(res=>res.json())
    .then(json=>{
        json.forEach(function(element){
            outputEle.innerHTML+=`<p>${element.title}</P>`
        })
    })

}