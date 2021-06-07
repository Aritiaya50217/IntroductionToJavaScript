function toCelsius(){
    let Fahrenheit = prompt("Fahrenheit :")
    let value = (Fahrenheit - 32) * 5 /9
    // toFixed(2) -> เอาทศนิยม 2 ตำแหน่ง
    document.getElementById("answer_section").innerHTML = value.toFixed(2) + " °C";
}
function toFahrenheit(){
    let Celsius = prompt("Celsius :")
    let value2 = (Celsius * 9)/5 + 32
    document.getElementById("answer_section2").innerHTML = value2.toFixed(2) + " °F";

}


toCelsius()
toFahrenheit()