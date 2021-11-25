let btn=document.getElementById('button')
let outputEle=document.getElementById('output')

btn.addEventListener("click",showMessage)

function showMessage(){
    var url="https://mystery-api.kushanksriraj.repl.co/get"
    fetch(url)
    .then(response=>{
        console.log(response)
        return response.status
    })
    .then(data=>showError(data))
    .catch(error=>console.log(error))

}

function showError(status){
    if(status==401){
        outputEle.innerHTML="page not found"
    }else if(status==404){
        outputEle.innerHTML="page"
    }else if(status==200){
        outputEle.innerHTML='working fine'
    }
}

