let round = prompt("รอบที่คุณต้องการจะเล่น :")

for(var i = 1; i <= round; i++){
    // ตัวแปรเก็บค่าเมื่อผู้ใช้กรอก
    var answer = prompt("หัว หรือ ก้อย ??" )
    // สร้างตัวแปรเก็บค่า หัว ก้อย
    var random_answer = ""
    
    // Math.floor = ปัดเศษลง
    // ถ้าเลขมากกว่า 0 - 4 จะเป็นหัว นอกนั้นเป็นก้อย
    if(Math.floor(Math.random() *10) <= 4 ){
        random_answer = "หัว"
    }else{
        random_answer = "ก้อย"
    }
    if(answer == random_answer) {
        alert("ยินดีด้วย !!")
    }else{
        alert("ลองใหม่อีกครั้ง !!!")
    }
 
    console.log("ค่าที่กรอก : " + answer +" ค่าที่ถูก : " + random_answer)
    document.getElementById("answer_list").innerHTML = round + "<br>"
    document.getElementById("answer").innerHTML +=  "ครั้งที่ " + i + " : " + answer + "<br>"
    document.getElementById("random_answer").innerHTML += "ครั้งที่ " + i + " : "+ random_answer + "<br>"

   

    
}