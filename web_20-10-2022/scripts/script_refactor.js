import {
    calculator_object
} from "./calculator.js";

import {
    op_memory
} from "./functions.js";

import {
    simple_operator,
    simple_operators_keys,
    simple_operators_values,
    complex_operator,
    complex_operators_keys,
    operations,
    eliminations,
    eliminations_keys,
    memory_operators,
    memory_operators_keys
} from "./objects.js";

const memorys = document.querySelector("#memorys");

const calculator = document.querySelector("main");

const result = document.querySelector("#num");
result.innerHTML = 0;

const operation = document.querySelector("#operation");
operation.innerHTML = "";

// Botones normales
calculator.addEventListener("click", e => {
    let element = e.target;

    // Inserción de números
    if (element.parentElement.className === "number"){
        if (result.textContent === "0"){
            result.innerHTML = element.value;
        } else {
            result.innerHTML += element.value;
        }

    // Inserción de comas
    } else if (element.id === "coma" && !result.textContent.includes(".")){
        result.innerHTML += ".";

    // Operaciones simples
    } else if (simple_operators_keys.includes(element.id)){
        if (result.textContent !== ""){
            if ((element.id === "rest" && result.textContent !== "0") || element.id !== "rest"){
                operation.innerHTML = result.textContent + simple_operator[element.id];
                result.innerHTML = "";
            } else {
                result.innerHTML = "-";
            }
        } 

    // Operaciones complejas
    } else if (complex_operators_keys.includes(element.id)){
        if (result.textContent !== "0"){
            operation.innerHTML = `${complex_operator[element.id]}( ${result.textContent} )`;
            result.innerHTML = operations[element.id](result.textContent);
        } 

    // Cambio de signo
    } else if (element.id === "change_sign"){
        result.innerHTML = calculator_object.change_sign(result.textContent);

    // Eliminación de elementos
    } else if (eliminations_keys.includes(element.id)){
        eliminations[element.id]();

    // Igual
    } else if (element.id === "equal"){
        if (result.textContent !== "0"){
            operation.innerHTML += result.textContent;
            let op = operation.textContent.split(" ");
    
            let num1 = calculator_object.convert(op[0]);
            let num2 = calculator_object.convert(op[2]);
            let pos_operator = simple_operators_values.indexOf(` ${op[1]} `)
    
            let operator_text = Object.keys(simple_operator)[pos_operator] 
            result.innerHTML = operations[operator_text](num1, num2);
        }
    }
})

// Botones memoria
calculator.addEventListener("click", e => {
    let element = e.target;

    if (memory_operators_keys.includes(element.id)){
        memory_operators[element.id]()
    }
});

// Operaciones de la memoria
memorys.addEventListener("click", e =>{
    let element = e.target; 
    let num = element.parentElement.previousElementSibling.textContent;
    let pos_num = calculator_object.memory.indexOf(num);

    if (element.className === "close"){
        memorys.style.display = "none"

    } else if (element.id === "delete_memory"){
        element.parentElement.parentElement.remove()
        calculator_object.delete_element(pos_num)

    } else if (element.id === "sum_memory" || element.id === "rest_memory"){
        memory_operators[element.id](pos_num)
        element.parentElement.previousElementSibling.innerHTML = calculator_object.memory[pos_num];
    } 
})