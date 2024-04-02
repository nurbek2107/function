let year = +prompt("Joriy yilni kiriting:")
let moth = +prompt("Joriy oyni kiriting (1-12):")
let data = +prompt("Joriy kunni kiriting:")
function date(year,moth,data,){
    let a = new Date(year,moth - 1,data) 
    /* Date   mustaqil formatda vaqtning bir lahzasini ifodalaydi. */
    let b = a.getTime() //millisekundlar sonini qaytaradi
    let c = 1000 * 60 * 60 * 24;
    let d = Math.floor(b / c); //eng katta butun sonni qaytaradi
    return d
}

date(year,moth,data) 

let yil = date(year,moth,data);

console.log("1970 yilning 1-yanvardan boshlab " + yil + " kun o'tgan.");