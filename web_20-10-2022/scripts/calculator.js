class Calculator{
    memory;

    constructor(memory){
        this.memory = memory;
    }

    set memory(new_memory){
        this.memory = new_memory;
    };

    get memory(){
        return this.memory;
    }

    sum(num1, num2) {
        let result = (num1 + num2).toFixed(2);
        result = `${result}`;

        if (result.includes(".00")){
            result = Math.round(result);
        }

        return result;
    }

    rest(num1, num2) {
        let result = (num1 - num2).toFixed(2);
        result = `${result}`;

        if (result.includes(".00")){
            result = Math.round(result);
        }

        return result;
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

}

export default Calculator;