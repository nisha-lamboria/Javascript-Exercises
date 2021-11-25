//wrong intentionally to check something

let btn=document.getElementById("button")
let output=document.getElementById("output")

let obj1 = {
    name: "ram ",
    power: "2500",
    yuga: "Treta"
}
let obj2 = {
    name: "krishna ",
    power: "2325",
    yuga: "Dwapar"
}

btn.addEventListener("click",function(){
    checkPowerName(obj1,obj2)
    checkPowerPr(obj1,obj2)
})

function checkPowerName(obj1,obj2){
    
    if (obj1.name.length * 35 > obj2.name.length * 35) {
        output.innerText = obj1.name
        // console.log(obj1.name);

    } else {
        output.innerText = obj2.name
        // console.log(obj2.name);

    }
}

function checkPowerPr(obj1,obj2){
    if (obj1.power > obj2.power) {
        output.innerText = obj1.name
    } else {
        output.innerText = obj2.name
    }


}