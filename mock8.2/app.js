let btn = document.getElementById('fetchApi')
let output = document.getElementById('output')

btn.addEventListener("click", fetchApi)

let url = "https://stock-api.desaihetav.repl.co/list"

function fetchApi() {
    fetch(url)
        .then(response => response.json())
        .then(json => {
            (json.data).forEach(function (element) {
                output.innerHTML+=`<p>${element.id} - ${element.name}</p>`
            })
        })
        .catch(error=>console.group(error))
}



// function fetchApi() {
//     fetch(url)
//         .then(response => response.json())
//         .then(json => console.log(json))
// }

// function fetchApi() {
//     fetch(url)
//         .then(response => response.json())
//         .then(json => {
//             const showList=json.data.map(element => `${element.id} - ${element.name}`)
//             output.innerText += showList
//         })
// }