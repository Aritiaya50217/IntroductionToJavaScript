function Bmi() {
    var weight = document.getElementById("weight").value
    var height = document.getElementById("height").value
    var result = weight / ((height / 100) ** 2)
    document.getElementById("result").innerHTML =  result.toFixed(2)
}

function factorialize(num) {
    if (num < 0 ){
        return -1 ;
    }else if (num == 0){
        return 1 ;
    }else {
        return (num * factorialize(num-1));
    }
}
function factorial() {
    var num = document.getElementById("num").value;
    var facResult = num * factorialize(num -1)
    document.getElementById("facResult").innerHTML = facResult
}