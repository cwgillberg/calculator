var num1 = "";
var num2 = "";
let op = "";
var result = ""
const calculatorText = document.querySelector("#calcText");


/*
is it the first number ? 

1. choose number
2. choose operator
3. choose number again
4. choose equals
*/

document.querySelector(".buttons").addEventListener("click", (e) => {
    let value = e.target.value;
    if(e.target.nodeName === "BUTTON") {
        //om nummer och n1 och op är tomma
        if(!isNaN(value) && (num1 === "" || op === "" )) {
            console.log(1);
            num1 = num1.concat(value);
            calculatorText.textContent = `${num1}`;
        } else if(!isNaN(value) && (num1 !== "" || op !== "" ) && result === "") {
            console.log(2);
            num2 = num2.concat(value);
            calculatorText.textContent = `${num1} ${op} ${num2}`;
        } else if(!isNaN(value) && (num1 !== "" || op !== "" ) && result !== "") {
            result = result.concat(value);
            calculatorText.textContent = `${num1} ${op} ${num2} = ${result}`;
        } else if(isNaN(value) && value !== "=" && value !== "clear" && op === "") {
            //op
            console.log(3);
            op = value;
            calculatorText.textContent = `${num1} ${op}`
        } else if(isNaN(value) && value !== "=" && value !== "clear" && op !== "") {
            console.log(4);
            op = value;
            num1 = result;
            result = "";
            num2 = ""
            calculatorText.textContent = `${num1} ${op}`
        } else if(isNaN(value) && value === "=" && result === "") {
            console.log(5);
            result = result.concat(operate(op, parseInt(num1), parseInt(num2)));
            calculatorText.textContent = `${num1} ${op} ${num2} = ${result}`;
        } else if(value === "clear") {
            console.log("clear")
            calculatorText.textContent = `0`;
            num1 = "";
            num2 = "";
            op = "";
            result = ""
        }
    }
});


 
 
function add(n1, n2) {
return n1 + n2;
}

function subtract(n1, n2) {
return n1-n2;
}

function multiply(n1, n2) {
return n1 * n2; 

}

function divide(n1, n2) {
return n1 / n2;
}

function operate(operator, n1, n2) {
if(operator === "+") {
    return add(n1, n2);
} else if(operator === "-") {
    return subtract(n1, n2);
} else if(operator === "x") {
    return multiply(n1, n2);
} else if(operator === "/") {
    return divide(n1, n2);
}
}