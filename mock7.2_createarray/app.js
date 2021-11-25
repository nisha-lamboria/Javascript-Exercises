let array = [{
        task: "watch",
        completed: false
    }, {
        task: "do",
        completed: true
    }, {
        task: "redo",
        completed: true
    }
]

let outEle=document.getElementById("output")
let button=document.getElementById("button")

button.addEventListener("click",showOut)

function showOut(){
    console.log(array)
    array.forEach(function(element){
        if(element.completed==true){
            outEle.innerHTML+=`<p>task:${element.task}</p>`
            outEle.innerHTML+=`<p>completed:${element.completed}</p>`
        }
    })

}

