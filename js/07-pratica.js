let idade = document.getElementById("idade");
let nome = document.getElementById("nome");
let butao_idade = document.getElementById("idade_button")
let butao_nome = document.getElementById("nome_button")
let h2 = document.getElementById("apresenta")

butao_idade.addEventListener("click", () => {
    let mIdade = idade.value;
    let mNome = nome.value

    if (mNome.trim() === "") {
        h2.textContent = `Seu nome é X e você tem ${mIdade} anos`;
    } else {
        h2.textContent = `Seu nome é ${mNome} e você tem ${mIdade} anos`;
        idade.value = ""
        nome.value = ""
    }
})

butao_nome.addEventListener("click", () => {
    let mIdade = idade.value;
    let mNome = nome.value

    if (mIdade.trim() === "") {
        h2.textContent = `Seu nome é ${mNome} e você tem Y anos`;
    } else {
        h2.textContent = `Seu nome é ${mNome} e você tem ${mIdade} anos`;
        idade.value = ""
        nome.value = ""
    }
})