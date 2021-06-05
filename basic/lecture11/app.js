let number = prompt("Please Enter Number :")
// console.log(number)
// นำเลขที่กรอกไปแสดงหน้า HTML
document.getElementById("inputNumber").innerHTML = number
// การสุ่มตัวเลข
// *100  คือ สุ่ม 0-99
// console.log(Math.floor(Math.random(number)*100))
// "result" ที่จะนำไปใส่ใน id = "..." ในหน้า html
// innerHTML สามารถใส่โค้ด HTML ลงไปได้
// innerText ใส่ได้แค่ text เท่านั้น
document.getElementById("result").innerHTML = Math.floor(Math.random(number)*100)
