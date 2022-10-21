import Calculator from "./calculator.js";

const body = document.querySelector("body");

const result = document.querySelector("#num");
result.innerHTML = "";

const operation = document.querySelector("#operation");
operation.innerHTML = "";

const calculator = new Calculator(result.textContent);

// Operaciones básicas
const sum = document.querySelector("#sum");
const rest = document.querySelector("#rest");
const multiplication = document.querySelector("#multiplication");
const division = document.querySelector("#division");

// Operaciones complejas
const square_root = document.querySelector("#square_root");
const elevated = document.querySelector("#elevated");
const reverse = document.querySelector("#reverse");
const percentage = document.querySelector("#percentage");

// Otras funciones
const clear = document.querySelector("#clear");
const clear_last_operating = document.querySelector("#clear_last_operating");
const clear_last_num = document.querySelector("#clear_last_num");
const change_sign = document.querySelector("#change_sign");
const coma = document.querySelector("#coma");
const equal = document.querySelector("#equal");

// Funciones de la memoria
const new_memory = document.querySelector("#new_memory");
const view_memory = document.querySelector("#view_memory");
const take_memory = document.querySelector("#take_memory");
const delete_memory = document.querySelector("#delete_memory");
const sum_memory = document.querySelector("#sum_memory");
const rest_memory = document.querySelector("#rest_memory");

const numNode = document.querySelectorAll(".number")
const numArray = [...numNode];

// Insertar números en la calculadora
function insertNum(numArray){
    numArray.forEach(num => {
        num.addEventListener("click", e => {
            let element = e.target;

            if (element.value !== undefined){
                result.innerHTML += element.value;
            }
        });
    });
}

insertNum(numArray);

// Inserción de comas
coma.addEventListener("click", e => {
    result.innerHTML += ".";
});

// Operaciones básicas
sum.addEventListener("click", e => {
    operation.innerHTML = result.textContent + " + ";
    result.innerHTML = "";
});

rest.addEventListener("click", e => {
    operation.innerHTML = result.textContent + " - ";
    result.innerHTML = "";
});

multiplication.addEventListener("click", e => {
    operation.innerHTML = result.textContent + " * ";
    result.innerHTML = "";
});

division.addEventListener("click", e => {
    operation.innerHTML = result.textContent + " / ";
    result.innerHTML = "";
});

// Operaciones complejas
square_root.addEventListener("click", e => {
    operation.innerHTML = `√( ${result.textContent} )`;
    result.innerHTML = calculator.square_root(result.textContent);
});

elevated.addEventListener("click", e => {
    operation.innerHTML = `sqrt( ${result.textContent} )`;
    result.innerHTML = calculator.elevated(result.textContent);
});

reverse.addEventListener("click", e => {
    operation.innerHTML = `1/( ${result.textContent} )`;
    result.innerHTML = calculator.reverse(result.textContent);
});

percentage.addEventListener("click", e => {
    operation.innerHTML = `( ${result.textContent} )/100`;
    result.innerHTML = calculator.percentage(result.textContent);
});

// Otras operaciones
change_sign.addEventListener("click", e => {
    result.innerHTML = calculator.change_sign(result.textContent);
});

clear.addEventListener("click", e => {
    result.innerHTML = "";
    operation.innerHTML = "";
});

clear_last_operating.addEventListener("click", e => {
    let op = operation.textContent.split(" ");
    result.innerHTML = "";
    op.pop();
    operation.innerHTML = op.join(" ") + " ";
});

clear_last_num.addEventListener("click", e => {
    result.innerHTML = result.innerHTML.slice(0, -1);
});

equal.addEventListener("click", e => {
    operation.innerHTML += result.textContent;
    let op = operation.textContent.split(" ");
    let num1 = 0;
    let num2 = 0;

    if (op[0].includes(".")){
        num1 = parseFloat(op[0]);
    } else {
        num1 = parseInt(op[0]);
    }

    if (op[2].includes(".")){
        num2 = parseFloat(op[2]);
    } else {
        num2 = parseInt(op[2]);
    }

    if (op[1] === "+"){
        result.innerHTML = calculator.sum(num1, num2);
    } 
    else if (op[1] === "-"){
        result.innerHTML = calculator.rest(num1, num2);
    } 
    else if (op[1] === "*"){
        result.innerHTML = calculator.multiplication(num1, num2);
    } 
    else if (op[1] === "/"){
        result.innerHTML = calculator.division(num1, num2);
    } 
    else if (op[0] === "√("){
        result.innerHTML = calculator.square_root(parseInt(op[1]));
    } 
    
});

// Funciones de la memoria
new_memory.addEventListener("click", e => {
    calculator.memory = result.textContent;
});

take_memory.addEventListener("click", e => {
    result.innerHTML = calculator.memory;
});

delete_memory.addEventListener("click", e => {
    calculator.memory = "";
});

sum_memory.addEventListener("click", e => {
    let num = result.textContent.toString();
    let num_memory = calculator.memory.toString();

    if (num.includes(".")){
        num = parseFloat(num);
    } else {
        num = parseInt(num);
    }

    if (num_memory.includes(".")){
        num_memory = parseFloat(num_memory);
    } else {
        num_memory = parseInt(num_memory);
    }

    calculator.memory = calculator.sum(num_memory, num);
});

rest_memory.addEventListener("click", e => {
    let num = result.textContent.toString();
    let num_memory = calculator.memory.toString();

    if (num.includes(".")){
        num = parseFloat(num);
    } else {
        num = parseInt(num);
    }

    if (num_memory.includes(".")){
        num_memory = parseFloat(num_memory);
    } else {
        num_memory = parseInt(num_memory);
    }

    calculator.memory = calculator.rest(num_memory, num);
});

view_memory.addEventListener("click", e => {
    const p = document.createElement("p");
    p.innerHTML = calculator.memory;
    body.appendChild(p);
});

