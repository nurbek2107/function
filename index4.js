"use strict"
let a = +prompt("son kiriting: ")
let c = prompt("+ - * / amallarni kiriting: ")
let b = +prompt("son kiriting: ")

function natija(a,b){
    if (c === "+"){
        alert(a+b)
    }else if (c === "*"){
        alert(a*b)
    }
    if(a>=b){
    if (c === "-"){
        alert(a-b)
    }else if (c === "/"){
        alert(a/b)
    }
}
else{
    alert("birinchi son ikkinchi sonda kichkina")
}
}
natija(a,b)