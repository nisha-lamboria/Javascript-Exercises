let nameEle=document.getElementById('name')
let btn=document.getElementsByClassName('button')
nameEle.style.border='1px solid black'

Array.from(btn).forEach(function(element){
    
    element.addEventListener('click',()=>{
        if(element.innerText=='5px'){
            nameEle.style.border='5px solid black'
        }else if(element.innerText=='10px'){
            nameEle.style.border='10px solid black'
        }
    })
    
})