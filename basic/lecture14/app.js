let lotto_number = prompt("กรุณากรอกเลขของคุณ")

// ค่าที่สุ่มได้
// floor การปัดเศษลง
let random_number = Math.floor(Math.random()*1000)
document.getElementById("random").innerHTML = random_number

// การหาว่าค่าที่เรากรอกกับค่าที่สุ่มเท่ากันหรือไม่
if (lotto_number == random_number) {
    document.getElementById("result").innerHTML = "ยินดีด้วยคุณถูกรางวัล"
}else {
    document.getElementById("result").innerHTML = "เสียใจด้วยคุณไม่ถูกรางวัล"
}

