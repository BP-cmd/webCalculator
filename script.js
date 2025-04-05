let digits = document.querySelectorAll(".key");
let display = document.querySelector(".display");
let oppKeys = document.querySelectorAll(".opp");
let equals = document.querySelector(".equals");
let reset = document.querySelector(".reset");
let num1, num2, operator;
let newEntry = true;

digits.forEach(digit => digit.addEventListener("click", () => updateDisplay(digit.innerText)));
oppKeys.forEach(key=>{
    key.addEventListener("click", ()=>{
        if(operator){
            operate();
        }
        operator=key.innerText;    
        num1 = Number(display.innerText);
        newEntry = true;
    })
});
equals.addEventListener("click", operate);
reset.addEventListener("click", resetCal);

function updateDisplay(str){
    if(newEntry) {
        display.innerText=str;
        newEntry = false;
        return;
    }
    display.innerText += str;
}

function operate(){
    if(!operator) return;
    num2 = Number(display.innerText);
    newEntry = true;
    updateDisplay(calculate(num1, num2, operator));
    operator = undefined;
}

function calculate (n1, n2, operation){
    switch(operation){
        case '+' : return n1 + n2;
        case '-' : return n1 - n2;
        case '*' : return n1 * n2;
        case '/' : return n1 / n2;
    }
}

function resetCal(){
    display.innerText = "0";
    newEntry = true;
    operator = undefined;
}