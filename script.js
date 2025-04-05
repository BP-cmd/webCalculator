let digits = document.querySelectorAll(".key");
let display = document.querySelector(".display");
let oppKeys = document.querySelectorAll(".opp");
let equals = document.querySelector(".equals");
let reset = document.querySelector(".reset");
let clear = document.querySelector(".clear");
let plusMinus = document.querySelector(".toggle");
let decimal = document.querySelector(".decimal");
let num1, num2, operator;
let newEntry = true;
let numEntered = false;



digits.forEach(digit => digit.addEventListener("click", () => {
    numEntered = true;
    updateDisplay(digit.innerText)
}));
decimal.addEventListener("click", ()=>{
    if(!display.innerText.includes(".")){
        updateDisplay(".")
    }
})
oppKeys.forEach(key=>{
    key.addEventListener("click", ()=>{
        if(operator){
            operate();
        }
        operator=key.innerText;    
        num1 = Number(display.innerText);
        newEntry = true;
        numEntered = false;
        deselectOpps();
        key.classList.toggle("selected");
    })
});
equals.addEventListener("click", operate);
reset.addEventListener("click", resetCal);
clear.addEventListener("click", ()=>{
    if(!newEntry){
        display.innerText = display.innerText.slice(0, -1);
    }
})
plusMinus.addEventListener("click", togglePlusMinus);


function updateDisplay(str){
    if(newEntry) {
        display.innerText=str;
        newEntry = false;
        return;
    }
    display.innerText += str;
}

function operate(){
    if(!operator || !numEntered) return;
    num2 = Number(display.innerText);
    newEntry = true;
    updateDisplay(calculate(num1, num2, operator));
    operator = undefined;
    newEntry = true;
    deselectOpps();
}

function calculate (n1, n2, operation){
    switch(operation){
        case '+' : return n1 + n2;
        case '-' : return n1 - n2;
        case '*' : return n1 * n2;
        case '/' :{
            if(n2 === 0) return "ERROR"; 
            return n1 / n2;
        }
    }
}

function resetCal(){
    display.innerText = "0";
    newEntry = true;
    operator = undefined;
}

function deselectOpps(){
    oppKeys.forEach(key=>{
        if(key.classList.contains("selected")){
            key.classList.remove("selected");
        }
    })
}

function togglePlusMinus(){
    if(!newEntry) display.innerText *= -1;
}