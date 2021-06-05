// counter มีค่าตั้งแต่ 0 - 4  
// จะออกจาก loop for เมื่อค่ามี > 5
for(var counter = 0; counter < 5 ;counter++){
    console.log("Hello : " + counter)
}
document.getElementById("result").innerHTML = "counter : " + counter
