/* parameter = ตัวแปรที่เกิดมาพร้อมกับ function
มีหน้าที่เอาไว้ใช้งสนภายใน function นั้นๆ
*/
function sayHello(userName,userLastname){
    return "Hello " + userName + " "+ userLastname
}
let userInput = prompt("Input your name :")
// Argument = ข้อมูลที่ส่งให้ function
// userInput เป็น argument
alert(sayHello(userInput,"Yaemjaraen"))

