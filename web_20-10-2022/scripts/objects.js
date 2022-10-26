import {
    calculator_object
} from "./calculator.js";


import {
    clear, 
    clear_last_num, 
    clear_last_operating, 
    delete_in_memory, 
    op_memory,
    new_item_memory,
    take_in_memory
} from "./functions.js";

const memorys = document.querySelector("#memorys");

const result = document.querySelector("#num");
result.innerHTML = 0;

const simple_operator = {
    "sum": " + ",
    "rest": " - ",
    "multiplication": " * ",
    "division": " / "
}
const simple_operators_keys = Object.keys(simple_operator);
const simple_operators_values = Object.values(simple_operator);

const complex_operator = {
    "square_root": "√",
    "elevated": "sqrt",
    "reverse": "1/",
    "percentage": "/100"
}
const complex_operators_keys = Object.keys(complex_operator);

const operations = {
    "sum": (x, y, pos) => calculator_object.sum(x, y, pos),
    "rest": (x, y) => calculator_object.rest(x, y),
    "multiplication": (x, y) => calculator_object.multiplication(x, y),
    "division": (x, y) => calculator_object.division(x, y),
    "square_root": (x) => calculator_object.square_root(x),
    "elevated": (x) => calculator_object.elevated(x),
    "reverse": (x) => calculator_object.reverse(x),
    "percentage": (x) => calculator_object.percentage(x)
}

const eliminations = {
    "clear": () => clear(),
    "clear_last_operating": () => clear_last_operating(),
    "clear_last_num": () => clear_last_num()
}
const eliminations_keys = Object.keys(eliminations);

const memory_operators = {
    "take_memory": () => take_in_memory(),
    "delete_a_memory": () => delete_in_memory(),
    "sum_memory": (pos_num) => op_memory("sum", pos_num),
    "rest_memory": (pos_num) => op_memory("rest", pos_num),
    "view_memory": () => memorys.style.display = "flex",
    "new_memory": () => new_item_memory()
}
const memory_operators_keys = Object.keys(memory_operators);

export {
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
};