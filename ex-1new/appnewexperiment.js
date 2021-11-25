let btnOp=document.getElementsByClassName('operation')
let inputOne=document.getElementById('input1')
let inputTwo=document.getElementById('input2')
// console.log(btnOp)
let outputEle=document.getElementById('calculate')


Array.from(btnOp).forEach(function(element){
    element.addEventListener('click',operation())
})

function operation(){
    let btnType=element.innerText
    if(btnType==='add'){
        console.log(Number(inputOne.value))
        console.log(Number(inputOne.value)+Number(inputTwo.value))
    }else if(btnType==='subtract'){
        console.log(Number(inputOne.value)-Number(inputTwo.value))
    }else if(btnType==='multiply'){
        console.log(Number(inputOne.value)*Number(inputTwo.value))
    }else if(btnType==='divide'){
        console.log(Number(inputOne.value)/Number(inputTwo.value))
    }
}


//wrong because parameter element is not global so it needs to be passed to operation function