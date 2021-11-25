let btn = document.getElementById('fetch')
let output = document.getElementById('output')



btn.addEventListener('click', callApi)

function callApi() {
    var url = "https://jsonplaceholder.typicode.com/todos"
    fetch(url)
        .then(response => response.json())
        .then(json => json.forEach(element => {
            if(element.completed==false){
                output.innerHTML+=`<p style="color:red;">Title: ${element.title}</p>`
            }else{
                output.innerHTML+=`<p>Title: ${element.title}</p>`
            }
            output.innerHTML+=`<p>Completed: ${element.completed}</p>`
            
        }))
}

// function callApi() {
//     var url = "https://jsonplaceholder.typicode.com/todos"
//     fetch(url)
//         .then(response => {return response.json()}) 
//         .then(json => json.forEach(element => {
//             output.innerHTML+=`<p>Title: ${element.title}</p> <p>Completed: ${element.completed}</p>`
//         }))
// }

