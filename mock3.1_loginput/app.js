let inputTxt = document.getElementById('inputTxt')
let btnList = document.getElementsByClassName('button')
let outputEle = document.getElementById('output')

Array.from(btnList).forEach(function (element) {
    element.addEventListener("click", function () {
        showMessage(element.innerText)
    })
})

function showMessage(btnTxt) {
    let inputVal = inputTxt.value
    console.log(inputVal)
    if (btnTxt == 'log') {
        outputEle.innerHTML = `${inputVal}`
    } else if (btnTxt == 'warn') {
        outputEle.innerHTML = `<p style="color:yellow;">${inputVal}</p>`
    }else if (btnTxt == 'error') {
        outputEle.innerHTML = `<p style="color:red">${inputVal}</p>`
    }
}