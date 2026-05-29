/**
 * VARIÁVEIS EM JAVASCRIPT
 * - const: valor não pode ser reatribuído
 * - let: valor pode ser alterado
 */

// DECLARAÇÃO DE VARIÁVEIS

let variavel = "Olá, tá tudo certo aqui chefe";

const opa = "Isso é uma constante";

// Isso daria erro (const não pode ser reatribuído)
// opa = "Outro valor";

// OUTPUT SIMPLES

console.log(variavel);

// STRINGS
/*
Aspas simples (' ') e duplas (" ") são iguais.
Crase (` `) permite:
- interpolação (${variavel})
- expressões dentro da string
- múltiplas linhas
*/

let mensagem = `${variavel}!`;
console.log(mensagem);

// OPERAÇÕES

let int1 = 189;
let int2 = 7378;

console.log(`Soma dos 2 números: ${int1 + int2}`);

// TIPOS PRIMITIVOS

let booleano = int1;
let bool = true;

booleano -= 3;

console.log(booleano);
console.log(bool);
console.log(int1);

// OBJETOS

const usuario = {
    nome: "Rodolfo",
    idade: 30,
    casado: true,
    trabalho: null
};

console.log(usuario.nome);

// ARRAYS

const array = ["Olá, ", "mundo"]
console.log(array)