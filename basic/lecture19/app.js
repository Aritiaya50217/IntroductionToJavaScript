let qrt = prompt("จำนวนสินค้า :")
// ตัวแปรเก็บราคารวม
let sum = 0
// ตัวแปร i เก็บจำนวนรอบ
for(var i = 1; i <= qrt; i++){
    let item_price = prompt("ราคาสินค้าชิ้นที่ :" + i)
    // parseInt แปลงจาก string เป็น integer
    // เพื่อนำเลขมาบวกกัน
    sum = sum + parseInt(item_price)
    document.getElementById("price-list").innerHTML += "รายการสินค้าชิ้นที่ : " + i + " ราคา " + item_price + " บาท" + "<br>"
    document.getElementById("result").innerHTML = "ราคารวมทั้งหมด " + sum + "  บาท"
   
}