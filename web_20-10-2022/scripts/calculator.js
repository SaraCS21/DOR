class Calculator{
    memory;

    constructor(){
        this.memory = 0;
    };

    suma(num) {
        return this.memory + num;
    }

    resta(num) {
        return this.memory - num;
    }

    multiplicacion(num){
        return this.memory * num;
    }

    division(num){
        return this.memory / num;
    }

    raiz(num){
        return Math.sqrt(num);
    }

    elevado(num){
        return num ** 2;
    }

    inversa(num){
        return 1 / num;
    }

    cambio_signo(){
        return -this.memory;
    }

    resto(num){
        return this.memory % num;
    }

    borrar_ultimo(){
        return this.memory.slice(0, -1);
    }

    reset(){
        return "";
    }

}