JAVASCRIPT - IF / ELSE

if (condicao) {
    // executa se for TRUE
} else {
    // executa se for FALSE
}

// EXEMPLO

let idade = 18;

if (idade === 18) {
    console.log("18 anos");
} else {
    console.log("Não pode entrar");
}

// ===============================
//  ELSE IF (múltiplas condições)
// ===============================

let nota = 7;

if (nota >= 9) {
    console.log("Excelente");
} else if (nota >= 6) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

// ===============================
//  OPERADORES LÓGICOS
// ===============================

// AND (&&)

let idade = 20;
let temCarteira = true;

if (idade >= 18 && temCarteira) {
    console.log("Pode dirigir");
}

// OR (||)

let estaChovendo = false;
let temGuardaChuva = true;

if (estaChovendo || temGuardaChuva) {
    console.log("Pode sair protegido");
}

// NOT (!)

let ligado = false;

if (!ligado) {
    console.log("Está desligado");
}

// RESUMO RÁPIDO

// &&  -> E (tudo precisa ser true)
// ||  -> OU (um já basta)
// !   -> NÃO (inverte o valor)


// ==  -> igualdade com CONVERSÃO de tipo
// === -> igualdade ESTRITA (sem conversão)

// 5 == "5"   -> true
// 1 == true  -> true
// 0 == false -> true


// 5 === "5"   -> false  (number != string)
// 1 === true  -> false
// 0 === false -> false

// 5 === 5     -> true