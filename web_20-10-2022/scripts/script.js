import Calculator from "./calculator.js";

const memorys = document.querySelector("#memorys");
const close = document.querySelector("#memorys .close");

const result = document.querySelector("#num");
result.innerHTML = 0;

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
                if (result.textContent === "0"){
                    result.innerHTML = element.value;
                } else {
                    result.innerHTML += element.value;
                }
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
    if (result.textContent !== ""){
        operation.innerHTML = result.textContent + " + ";
        result.innerHTML = "";
    } 
});

rest.addEventListener("click", e => {
    if (result.textContent !== "0"){
        operation.innerHTML = result.textContent + " - ";
        result.innerHTML = "";
    } else {
        result.innerHTML = "-";
    }
});

multiplication.addEventListener("click", e => {
    if (result.textContent !== ""){
        operation.innerHTML = result.textContent + " * ";
        result.innerHTML = "";
    } 
});

division.addEventListener("click", e => {
    if (result.textContent !== ""){
        operation.innerHTML = result.textContent + " / ";
        result.innerHTML = "";
    } 
});

// Operaciones complejas
square_root.addEventListener("click", e => {
    if (result.textContent !== "0"){
        operation.innerHTML = `√( ${result.textContent} )`;
        result.innerHTML = calculator.square_root(result.textContent);
    } 
});

elevated.addEventListener("click", e => {
    if (result.textContent !== "0"){
        operation.innerHTML = `sqrt( ${result.textContent} )`;
        result.innerHTML = calculator.elevated(result.textContent);
    }
});

reverse.addEventListener("click", e => {
    if (result.textContent !== "0"){
        operation.innerHTML = `1/( ${result.textContent} )`;
        result.innerHTML = calculator.reverse(result.textContent);
    }
});

percentage.addEventListener("click", e => {
    if (result.textContent !== "0"){
        operation.innerHTML = `( ${result.textContent} )/100`;
        result.innerHTML = calculator.percentage(result.textContent);
    }
});

// Otras operaciones
change_sign.addEventListener("click", e => {
    result.innerHTML = calculator.change_sign(result.textContent);
});

clear.addEventListener("click", e => {
    result.innerHTML = 0;
    operation.innerHTML = "";
});

clear_last_operating.addEventListener("click", e => {
    let op = operation.textContent.split(" ");
    result.innerHTML = 0;
    op.pop();
    operation.innerHTML = op.join(" ") + " ";
});

clear_last_num.addEventListener("click", e => {
    if (result.innerHTML.length === 1){
        result.innerHTML = 0;
    } else {
        result.innerHTML = result.textContent.slice(0, -1);
    }
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
    calculator.memory.push(result.textContent);

    // Creación de botones
    const div_buttons = document.createElement("div"); 
    const button_mc = document.createElement("button"); 
    button_mc.innerText = "MC";
    button_mc.id = "delete_memory";
    const button_mplus = document.createElement("button"); 
    button_mplus.innerText = "M+";
    button_mplus.id = "sum_memory";
    const button_mminus = document.createElement("button"); 
    button_mminus.innerText = "M-";
    button_mminus.id = "rest_memory";

    div_buttons.append(button_mc, button_mplus, button_mminus);
    div_buttons.className = "buttons";

    // Div de los números de la memoria
    const div_num_memory = document.createElement("div"); 
    div_num_memory.className = "num_memory";

    const p_num_memory = document.createElement("p"); 
    p_num_memory.innerText = calculator.memory.at(-1);
    div_num_memory.appendChild(p_num_memory);

    div_num_memory.appendChild(div_buttons);

    memorys.append(div_num_memory);

    // Disable
    take_memory.disabled = undefined;
    take_memory.classList.remove("disabled");
    delete_memory.disabled = undefined;
    delete_memory.classList.remove("disabled");
    view_memory.disabled = undefined;
    view_memory.classList.remove("disabled");

});

// Botones dentro de la memoria

memorys.addEventListener("click", e =>{
    let element = e.target; 
    let num = element.parentElement.previousElementSibling.textContent;
    let pos_num = calculator.memory.indexOf(num);

    console.log(num)
    console.log(pos_num)
    console.log(calculator.memory)

    if (element.id === "delete_memory"){
        element.parentElement.parentElement.remove()
        calculator.memory.splice(pos_num, 1)

    } else if (element.id === "sum_memory"){
        let num_result = result.textContent.toString();
        num = num.toString();
    
        if (num.includes(".")){
            num = parseFloat(num);
        } else {
            num = parseInt(num);
        }
    
        if (num_result.includes(".")){
            num_result = parseFloat(num_result);
        } else {
            num_result = parseInt(num_result);
        }

        element.parentElement.previousElementSibling.innerHTML = num + num_result;

    } else if (element.id === "rest_memory"){
        let num_result = result.textContent.toString();
        num = num.toString();
    
        if (num.includes(".")){
            num = parseFloat(num);
        } else {
            num = parseInt(num);
        }
    
        if (num_result.includes(".")){
            num_result = parseFloat(num_result);
        } else {
            num_result = parseInt(num_result);
        }

        element.parentElement.previousElementSibling.innerHTML = num - num_result;
    }
})

take_memory.addEventListener("click", e => {
    result.innerHTML = calculator.memory;
});

delete_memory.addEventListener("click", e => {
    calculator.memory = [];

    take_memory.disabled = true;
    take_memory.className = "disabled";
    delete_memory.disabled = true;
    delete_memory.className = "disabled";
    view_memory.disabled = true;
    view_memory.className = "disabled";
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
    memorys.style.display = "flex";
});

close.addEventListener("click", e => {
    memorys.style.display = "none";
});
