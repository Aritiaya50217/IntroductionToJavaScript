/* การใช้ == จะไม่สนใจ data type
    หากข้อมูลเหมือนกันก็จะเป็น true ถึงแม้จะคนละ type ก็ตาม
*/
console.log("1 == 1 :",1 == 1)
// true
console.log('1 == "1" :',1 == "1")
console.log("5 == 6 :",5 == 6)

/* ใช้ === ในการตรวจสอบว่าค่าเท่ากันหรือไม่
    === จะสนใจ data type
*/
console.log("6 === 6 :",6 === 6)
// false
console.log('"6" === 6 : ',"6" === 6)
console.log('"4" === 4 :',"4" === 4)

// != ใช้ในกรณี ไม่เท่ากับ
console.log('"4" != 4 :',"4" != 4)
console.log('"hello" != "Hello" :',"hello" != "Hello")

// !== ตรวจสอบว่าไม่เท่ากับ
console.log('"4" !== 4 :',"4" !== 4)

console.log("10 > 5 : ",10 > 5)
console.log("5 < 5 : ",5 < 5)
console.log("5 <= 5 : ",5 <= 5)