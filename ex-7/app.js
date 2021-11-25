let input = document.getElementById('inputTxt')
let btn = document.getElementById('button')
let outpt = document.querySelector('#output')

let url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function getTranslatedUrl(text) {
    let translatedUrl = encodeURI(`${url}?text=${text}`)
    return translatedUrl
}

function clickHandler() {
    fetch(getTranslatedUrl(input.value))
        .then(response => response.json())
        .then(json => {
            outpt.innerHTML = `${json.contents.translated}`
            console.log(json)
        })
        .catch(errorHandler)
}

btn.addEventListener('click', clickHandler)

function errorHandler(error) {
    console.log('error occured', error)
}