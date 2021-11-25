let btns=document.getElementsByClassName('button')
let input=document.getElementById('counterVal')

Array.from(btns).forEach(function(element){
    element.addEventListener("click",()=>counterVal(element.innerHTML))
})

function counterVal(btnText){
    if(btnText==='+'){
        input.innerHTML=parseInt(input.innerHTML)+1
    }else if(btnText==='-'){
        input.innerHTML=parseInt(input.innerHTML)-1
    }
}

