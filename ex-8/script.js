let btnCheck = document.getElementById("btnCheck")
let output = document.getElementById('output')


function apiCall() {
    let url = "https://unitube-server.herokuapp.com/playlists"
    fetch(url)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            output.innerText = `Error:${json.message}`
        })
        .catch(error => console.log(error))
}

btnCheck.addEventListener("click", apiCall)