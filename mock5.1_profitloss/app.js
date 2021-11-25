let inputs=document.getElementsByClassName('inputPrice')
let btn=document.getElementById('button')
let outputEle=document.getElementById('output')

btn.addEventListener("click",calculate)

function calculate(){
    // outputEle.innerHTML=""  //not needed as else statement is there
    if(inputs[0].value>0 && inputs[1].value>0){
        if(inputs[0].value>inputs[1].value){
            outputEle.innerHTML=`loss of ${inputs[0].value -inputs[1].value}`
        }else if(inputs[1].value>inputs[0].value){
            outputEle.innerHTML=`profit of ${inputs[1].value -inputs[0].value}`
        }else if(inputs[1].value===inputs[0].value){
            outputEle.innerHTML='nothing'
        }
    }else{
        outputEle.innerHTML="enter postive values"
    }
    
}

