'use strict'

const fibonacci = () => {
    let resultado = [0, 1]

    Array.from(
        { length: 14 },
        (a, b) => resultado.push(calculandoFibonacci(b))
    )

    return resultado;
}

const isFibonnaci = (num) => fibonacci().includes(num);

const calculandoFibonacci = (num) => {
    let num1 = 1;
    let num2 = 0
    let temp;

    while (num >= 0) {
        temp = num1;

        num1 += num2;
        num2 = temp;
        num--;
    }

    return num2;
}

module.exports = {
    fibonacci,
    isFibonnaci
}
