let num1 = "";
let operator = "";
let num2 = "";

function add(num1, num2){
    return num1 + num2;
}
function sub(num1, num2){
    return num1 - num2;
}
function multi(num1,num2){
    return num1*num2;
}
function divi(num1,num2){
    if(num2 ===0){
        return "Error: cannot be zero"    
    }
    return num1/num2;
}
function modulo(num1,num2){
    return num1%num2;
}

function operate(operator, num1, num2){
    if(operator === "+"){
        return add(num1,num2);
    }
    else if(operator === "-"){
        return sub(num1,num2);
    }
    else if(operator === "*"){
        return multi(num1,num2);
    }
    else if(operator === "/"){
        return divi(num1,num2);
    }
    else if(operator === "%"){
        return modulo(num1,num2);
    }
    else{
        return "Invalid";
    }
}






//buttonRead
const display = document.querySelector("#disp");

document.querySelector(".numPad").addEventListener("click", function(event) {
    if(event.target.classList.contains("nums")){
        if(!operator){
            num1 += event.target.textContent;
            display.value += num1;
        }
        else{
            num2 += event.target.textContent;
            display.value += num2;
        }
    }
});

document.querySelector(".numPad").addEventListener("click", function(event) {
    if(event.target.classList.contains("operator")){
        if(num1){
            operator = event.target.textContent;
            display.value = operator;
        }
    }
})

