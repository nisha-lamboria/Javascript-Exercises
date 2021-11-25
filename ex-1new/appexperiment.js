let btnOp=document.getElementsByClassName('operation')
let inputOne=document.getElementById('input1')
let inputTwo=document.getElementById('input2')

// console.log(btnOp)
let input1Val=Number(inputOne.value)
let input2val=Number(inputTwo.value)
// console.log(inputOne.value)

Array.from(btnOp).forEach(function(element){
    element.addEventListener('click',function(){
        operation(element.innerHTML)
    })
})

function operation(btnType){

    if(btnType=='add'){
        console.log(input1Val,input2val)
        console.log(input1Val+input2val)
    }else if(btnType=='subtract'){
        console.log(input1Val-input2val)
    }else if(btnType=='multiply'){
        console.log(input1Val*input2val)
    }else if(btnType=='divide'){
        console.log(input1Val/input2val)
    }
}


//this is wrong we need to define input values inside function operation
