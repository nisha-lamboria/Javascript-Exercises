// name, age, and yuga as Ram, 25, Treta. Krishna, 31, Dwapar
let btn=document.getElementById("button")
let out=document.getElementById("output")
let obj1={
    name:"Ram",
    age:"25",
    yuga:"treta"
}
let obj2={
    name:"Krishna",
    age:"31",
    yuga:"dwapar"
}

btn.addEventListener("click",()=>checkAge(obj1,obj2))

function checkAge(obj1,obj2){
    if(obj1.age<obj2.age){
        out.innerText=obj2.name

    }


}