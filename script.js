

let num1 = "";
let operator = "";
let num2 = "";


// function add(num1, num2){
//     return num1 + num2;
// }
// function sub(num1, num2){
//     return num1 - num2;
// }
// function multi(num1,num2){
//     return num1*num2;
// }
// function divi(num1,num2){
//     if(num2 ===0){
//         return "Error: cannot be zero"    
//     }
//     return num1/num2;
// }
// function modulo(num1,num2){
//     return num1%num2;
// }








//buttonRead
const display = document.querySelector("#disp");

document.querySelector(".numPad").addEventListener("click", function(event) {
    const button =event.target;
    if(button.classList.contains("nums")){
        if(!operator){
            num1 += button.textContent;
            display.value = num1;
        }
        else{
            num2 += button.textContent;
            display.value = num2;
        }
    }
    if(button.classList.contains("operator")){
        

        if(num1 && num2){
            operator = button.textContent;
            const resultDisp = operate(operator, parseFloat(num1), parseFloat(num2));
            display.value = resultDisp;
            num1 = resultDisp.toString();
            operator = button.textContent;
            num2 = "";           
        }
        else if(num1){
            operator = button.textContent;
            display.value = num1;
        }
    }
    if(button.id === "equalTo"){
        if(num1 && operator && num2){
            const resultDisp = operate(operator, parseFloat(num1), parseFloat(num2));
            display.value = resultDisp;
    
            num1 = resultDisp.toString();
            operator = "";
            num2 = "";
        }
    }
    if(button.id === "allClear"){
        num1 = "";
        operator = "";
        num2 = "";
        display.value = "";
    }
    if(button.id === "pOrM"){
        if(!operator){
            num1 = (-parseFloat(num1)).toString();
            display.value = num1;
        }
        else if(num2){
            num2 = (-parseFloat(num2)).toString();
            display.value = num2;
        }
    }
});


function operate(operator, num1, num2){
    if(operator === "+"){
        return num1 + num2;
    }
    else if(operator === "-"){
        return num1 - num2;
    }
    else if(operator === "X"){
        return num1*num2;
    }
    else if(operator === "/"){
        return num2===0 ? "by 0... Really" : (num1/num2).toFixed(2);
    }
    else if(operator === "%"){
        return num2 ===0 ? "by 0... Really" : (num1%num2).toFixed(2);
    }
    else{
        return "Invalid";
    }
}