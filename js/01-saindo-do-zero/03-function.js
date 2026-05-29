//  JAVASCRIPT - FUNÇÕES

function saudacao() {
    console.log("Olá, tudo bem?");
}

saudacao();


//  FUNÇÃO COM PARÂMETROS

function somar(a, b) {
    console.log(a + b);
}

somar(10, 5);


//  FUNÇÃO COM RETURN

// return devolve um valor da função

function multiplicar(a, b) {
    return a * b;
}

let resultado = multiplicar(4, 3);

console.log(resultado);


// ARROW FUNCTION (=>)

// Forma mais moderna de escrever funções

const dividir = (a, b) => {
    return a / b;
};

console.log(dividir(10, 2));


// Se tiver só uma linha, pode simplificar

const subtrair = (a, b) => a - b;

console.log(subtrair(10, 3));


//  DIFERENÇA: console.log vs return

// console.log -> só mostra na tela
// return       -> devolve o valor para ser usado depois

function exemplo1() {
    console.log(10);
}

function exemplo2() {
    return 10;
}


//  RESUMO RÁPIDO

// function nome() {}        -> função tradicional
// nome()                   -> chama a função

// (a, b) => {}             -> arrow function

// return                   -> devolve valor
// console.log              -> apenas imprime