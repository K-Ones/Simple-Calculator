function press(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    let display = document.getElementById("display");
    let expression = display.value;

    try {
        let result = eval(expression);  
        display.value = result;         
    } 
    catch (error) {
        display.value = "Error";        
    }
}