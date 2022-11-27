class Calculator{
    memory;

    constructor(){
        this.memory = [];
    }

    get memory(){
        return this.memory;
    }

    sum(num1, num2, pos) {
        let result = (num1 + num2).toFixed(2).toString();

        if (result.includes(".00")){
            result = Math.round(result);
        } 

        if (pos !== undefined){
            this.memory[pos] = result.toString();
        }

        return result.toString();
    }

    rest(num1, num2, pos) {
        let result = (num1 - num2).toFixed(2).toString();

        if (result.includes(".00")){
            result = Math.round(result);
        }

        if (pos !== undefined){
            this.memory[pos] = result.toString();
        }

        return result.toString();
    }

    multiplication(num1, num2){
        let result = (num1 * num2).toFixed(2);
        result = `${result}`;

        if (result.includes(".00")){
            result = Math.round(result);
        }
        return result;
    }

    division(num1, num2){
        let result = (num1 / num2).toFixed(2);
        result = `${result}`;

        if (result.includes(".00")){
            result = Math.round(result);
        }

        if (num2 === 0){
            result = NaN
        }

        return result;
    }

    square_root(num){
        let result = (Math.sqrt(num)).toFixed(2);
        result = `${result}`;

        if (result.includes(".00")){
            result = Math.round(result);
        }
        return result;
    }

    elevated(num){
        let result = (num ** 2).toFixed(2);
        result = `${result}`;

        if (result.includes(".00")){
            result = Math.round(result);
        }
        return result;
    }

    reverse(num){
        let result = (1 / num).toFixed(2);
        result = `${result}`;

        if (result.includes(".00")){
            result = Math.round(result);
        }
        return result;
    }

    change_sign(num){
        return -num;
    }

    percentage(num1){
        let result = (num1 / 100).toFixed(2);
        result = `${result}`;

        if (result.includes(".00")){
            result = Math.round(result);
        }
        return result;
    }

    convert(num){
        if (num.toString().includes(".")){
            return parseFloat(num);
        } else {
            return parseInt(num);
        }
    }

    delete_all_memory(){
        this.memory = [];
    }

    add_element(element){
        this.memory.push(element);
    }

    delete_element(pos_num){
        this.memory.splice(pos_num, 1);
    }
}

const calculator_object = new Calculator();

export {
    Calculator,
    calculator_object
};