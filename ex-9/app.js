let btnCheck = document.getElementById("btnCheck")
let output = document.getElementById('output')

function apiCall() {
    let url = "https://mystery-api.kushanksriraj.repl.co/get"
    fetch(url)
        .then(response => {
                console.log(response)
                showError(response.status)
        })
        .catch(error=> console.log(error))
}

btnCheck.addEventListener("click", apiCall)

function showError(errorCode){
    if(errorCode==404){
        output.innerText=`${errorCode} - page not found`
    }else if(errorCode === 401) {
        output.innerText = `${errorCode} - you are not logged in`;
    }else if(errorCode === 200) {
        output.innerText = `${errorCode} - API working fine`;
    }
}