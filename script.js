const fahrenheit = document.getElementById("fahrenheitRadio");
const celsius = document.getElementById("celsiusRadio");
const button = document.getElementById("submit");
let result;

function convert(){
    const input = Number(document.getElementById("numberInput").value);

    if(celsius.checked){
        result = (input - 32) * 5 / 9;
        document.getElementById("result").textContent = `The result is ${result.toFixed(2)}°C.`;
    }
    else if(fahrenheit.checked){
        result = 9/5*input +32;
        document.getElementById("result").textContent = `The result is ${result.toFixed(2)}°F.`;
    }
    else{
        document.getElementById("result").textContent = "Select a unit.";
    }
}

button.addEventListener("click", convert);