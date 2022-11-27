import {
    calculator_object
} from "./calculator.js";

const memorys = document.querySelector("#memorys");
const result = document.querySelector("#num");
const operation = document.querySelector("#operation");

const view_m = document.querySelector("#view_memory");
const take_m = document.querySelector("#take_memory");
const delete_m = document.querySelector("#delete_memory");

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

function change_disable_condition(element, status){
    if (status === "active"){
        element.disabled = undefined;
        element.classList.remove("disabled");
    } else {
        element.disabled = true;
        element.className = "disabled";
    }
}

function delete_all_memory(){
    calculator_object.delete_all_memory();

    change_disable_condition(take_m, "inactive");
    change_disable_condition(delete_m, "inactive");
    change_disable_condition(view_m, "inactive");
}

function op_memory(operation, pos = 0){
    let num = result.textContent.toString();
    let num_memory = calculator_object.memory[pos];

    let num1 = calculator_object.convert(num);
    let num2 = calculator_object.convert(num_memory);

    if (operation === "sum"){
        return calculator_object.sum(num2, num1, pos);
    } else {
        return calculator_object.rest(num2, num1, pos);
    }
}

function take_in_memory(){
    result.innerHTML = calculator_object.memory[0]
}

function new_item_memory(){
    console.log(result.textContent)
    calculator_object.add_element(result.textContent);

    // crear botones
    const div_buttons = document.createElement("div"); 
    const button_mc = document.createElement("button"); 
    button_mc.innerText = "MC";
    button_mc.id = "delete_in_memory";
    const button_mplus = document.createElement("button"); 
    button_mplus.innerText = "M+";
    button_mplus.id = "sum_in_memory";
    const button_mminus = document.createElement("button"); 
    button_mminus.innerText = "M-";
    button_mminus.id = "rest_in_memory";

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

    change_disable_condition(take_m, "active");
    change_disable_condition(delete_m, "active");
    change_disable_condition(view_m, "active");
}

export {
    clear, 
    clear_last_num, 
    clear_last_operating,
    delete_all_memory, 
    op_memory,
    new_item_memory,
    take_in_memory,
    change_disable_condition
};