let display= document.querySelector(".display");
let keys = document.querySelectorAll(".key");
let clear = document.querySelector(".clear");
let equals = document.querySelector(".equals")


keys.forEach((key)=>{
    key.addEventListener("click", ()=>{
        display.innerText += key.innerText;
    });
});

clear.addEventListener("click", ()=>{
    display.innerText = display.innerText.slice(0, -1);
});

equals.addEventListener("click", ()=>evaluate(display.innerText));

function evaluate(numStr){
    let oppList = ['+', '-', '/', '*'];
    let opp;
    oppList.forEach((element)=>{
        if(numStr.includes(element)){
            opp = element;
        }
    });
    let num1, num2;
    [num1, num2] = numStr.split(opp);
    display.innerText = calculate(num1, num2, opp);
}

function calculate(num1, num2, operation){
    switch(operation){
        case '+': return +num1 + +num2;
        case '-': return num1 - num2;
        case '/': return num1 / num2;
        case '*': return num1 * num2;
    }
}