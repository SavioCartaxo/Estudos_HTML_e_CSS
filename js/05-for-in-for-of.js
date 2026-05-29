//  JAVASCRIPT - FOR IN / FOR OF

//  FOR OF

// Percorre os VALORES

let numeros = [10, 20, 30, 40];

for (let valor of numeros) {
    console.log(valor);
}

//  FOR IN

// Percorre os ÍNDICES ou CHAVES

let frutas = ["Maçã", "Banana", "Uva"];

for (let indice in frutas) {
    console.log(indice);
}

//  PEGANDO ÍNDICE E VALOR

let nomes = ["Ana", "Carlos", "Pedro"];

for (let indice in nomes) {
    
    console.log(indice);
    console.log(nomes[indice]);
}

//  FOR IN COM OBJETOS

// for in é muito usado com objetos

const usuario = {
    nome: "Sávio",
    idade: 20,
    casado: false
};

for (let chave in usuario) {

    console.log(`${chave} : ${usuario[chave]}`);
}

//  DIFERENÇA PRINCIPAL

// FOR EACH

const savio = {
    nome : "Sávio",
    idade : 22
}

const byanca = {
    nome : "Byanca",
    idade : 21
}

const users = [savio, byanca]

users.forEach((item, index, array) => {
    console.log(`Casal do ano ${index+1} : ${item.nome}`)
});

// for of -> VALORES
// for in -> ÍNDICES ou CHAVES