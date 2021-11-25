let inputId=document.getElementById("inputid")
let buyPrice=document.getElementById("bp")
let btn=document.getElementById("button")

btn.addEventListener("click",callApi)

function callApi(){
    let url="https://stock-api.desaihetav.repl.co/current-price/"
    url=url+inputId.value.toUpperCase()
    console.log(inputId.value)
    fetch(url)
    .then(response=>response.json())
    .then(json=>calculateStock(json))
}

function calculateStock(curVal){
    let bpVal=buyPrice.value
    if(curVal>bpVal){
        console.log('profit')
    }
}