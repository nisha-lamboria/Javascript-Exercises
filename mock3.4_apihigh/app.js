let btn = document.getElementById("button")
let outputEle = document.getElementById("output")

btn.addEventListener("click", callApi)

function callApi() {

    let url = "https://mock-practice.prakhar10v.repl.co/items"
    fetch(url)
        .then(res => res.json())
        .then(json => {
            console.log(json)
            showHighPrice(json)
        })
}

function showHighPrice(arrayOfObs) {
    let highPrice = 0
    arrayOfObs.forEach(function (element, index) {
        if (element.price > highPrice) {
            highPrice = element.price
            outputEle.innerHTML = element.item
        }

    })

}
