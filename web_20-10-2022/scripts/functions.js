const result = document.querySelector("#num");
result.innerHTML = 0;

const operation = document.querySelector("#operation");
operation.innerHTML = "";

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

export {
    clear, 
    clear_last_num, 
    clear_last_operating, 
    convert
};