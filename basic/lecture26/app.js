function toCelsius(fahrenheit){
    
    let value = (fahrenheit - 32) * 5 /9
    // toFixed(2) -> เอาทศนิยม 2 ตำแหน่ง
    //document.getElementById("toCelsius").innerHTML = value.toFixed(2) + " °C";

    return value.toFixed(2) + " °C"
}
function display(elementId,value){
    document.getElementById(elementId).innerHTML = "<b>" + value + "</b>"
}

function toFahrenheit(celsius){
    let value = (celsius * 9)/5 + 32
    // document.getElementById("toFahrenheit").innerHTML = value.toFixed(2) + " °F";
    return value.toFixed(2) + " °F"

}

alert(toCelsius(322))
display("toCelsius",toCelsius(322))

alert(toFahrenheit(322))
display("toFahrenheit",toFahrenheit(322))
