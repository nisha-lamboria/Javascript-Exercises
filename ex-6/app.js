let button=document.querySelector('.loaded')
let divEle=document.getElementById('output')
console.log(divEle)

button.addEventListener('click',hideText)
function hideText(){
    divEle.style.display='none'
}