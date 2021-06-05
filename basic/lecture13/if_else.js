let firstName = prompt("กรุณากรอกชื่อของคุณ :")
let age = prompt("กรุณากรอกอายุของคุณ :")
if (age > 13) {
    // console.log("Hello",firstName)
    document.getElementById("content").innerHTML = "ยินดีต้อนรับ "+ firstName
}else if (age < 13){
    // console.log("อายุของคุณ ",firstName,"น้อยกว่าที่กำหนด")
    document.getElementById("content").innerHTML = "อายุของคุณ "+ firstName + " น้อยกว่าที่กำหนด"
}