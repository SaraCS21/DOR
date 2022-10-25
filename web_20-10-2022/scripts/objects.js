import Calculator from "./calculator.js";

import {
    clear, 
    clear_last_num, 
    clear_last_operating, 
    convert,
    delete_in_memory, 
    op_memory,
    new_memory
} from "./functions.js";

const result = document.querySelector("#num");
result.innerHTML = 0;

const calculator_object = new Calculator(result.textContent);

const simple_operator = {
    "sum": "+",
    "rest": "-",
    "multiplication": "*",
    "division": "/"
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
    "sum": (x, y) => calculator_object.sum(x, y),
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
    "take_memory": () => result.innerHTML = calculator_object.memory,
    "delete_memory": () => delete_in_memory(),
    "sum_memory": () => op_memory("sum"),
    "rest_memory": () => op_memory("rest"),
    "view_memory": () => memorys.style.display = "flex",
    "close": () => memorys.style.display = "none",
    "new_memory": () => new_memory()
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