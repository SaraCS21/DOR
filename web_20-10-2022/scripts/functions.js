import Calculator from "./calculator.js";

const result = document.querySelector("#num");
result.innerHTML = 0;

const operation = document.querySelector("#operation");
operation.innerHTML = "";

const calculator_object = new Calculator(result.textContent);

const view_memory = document.querySelector("#view_memory");
const take_memory = document.querySelector("#take_memory");
const delete_memory = document.querySelector("#delete_memory");

function clear(){
    result.innerHTML = 0;
    operation.innerHTML = "";
}

function clear_last_operating(){
    let op = operation.textContent.split(" ");
    result.innerHTML = 0;
    op.pop();
    operation.innerHTML = op.join(" ") + " ";
}

function clear_last_num(){
    if (result.innerHTML.length === 1){
        result.innerHTML = 0;
    } else {
        result.innerHTML = result.textContent.slice(0, -1);
    }
}

function convert(num){
    if (num.includes(".")){
        return parseFloat(num);
    } else {
        return parseInt(num);
    }
}

function change_disable_condition(element, status){
    if (status === "active"){
        element.disabled = false;
        element.classList.remove("disabled");
    } else {
        element.disabled = true;
        element.className = "disabled";
    }
}

function delete_in_memory(){
    calculator_object.memory = [];

    change_disable_condition(take_memory, "inactive");
    change_disable_condition(delete_memory, "inactive");
    change_disable_condition(view_memory, "inactive");
}

function op_memory(operation){
    let num = result.textContent.toString();
    let num_memory = calculator_object.memory.toString();

    let num1 = convert(num);
    let num2 = convert(num_memory);

    console.log(num1)
    console.log(num2)

    if (operation === "sum"){
        calculator_object.memory = calculator_object.sum(num2, num1);
    } else {
        calculator_object.memory = calculator_object.rest(num2, num1);
    }
}

function take_in_memory(){
    result.innerHTML = calculator_object.memory
}

function new_memory(){
    calculator_object.memory.push(result.textContent);

    // crear botones
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
    p_num_memory.innerText = calculator_object.memory.at(-1);
    div_num_memory.appendChild(p_num_memory);

    div_num_memory.appendChild(div_buttons);

    memorys.append(div_num_memory);

    change_disable_condition(take_memory, "active");
    change_disable_condition(delete_memory, "active");
    change_disable_condition(view_memory, "active");
}

export {
    clear, 
    clear_last_num, 
    clear_last_operating, 
    convert,
    delete_in_memory, 
    op_memory,
    new_memory,
    take_in_memory
};