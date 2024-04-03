let year = +prompt("yilni kiriting:")
let moth = +prompt("oyni kiriting (1-12):")
let data = +prompt("kunni kiriting:")
function date(year,moth,data,){
    let a = new Date(year,moth - 1,data) 
    /* Date   mustaqil formatda vaqtning bir lahzasini ifodalaydi. */
    let b = a.getTime() //millisekundlar sonini qaytaradi
    let d = Math.floor(b / (1000 * 60 * 60 * 24)); //eng katta butun sonni qaytaradi
    return d
}
date(year,moth,data) 
    let yil= date(year,moth,data)
alert("1970 yilning 1-yanvardan boshlab " + yil + " kun o'tgan.");