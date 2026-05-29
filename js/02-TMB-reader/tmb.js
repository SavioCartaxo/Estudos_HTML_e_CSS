let nPeso = document.getElementById("peso")
let nIdade = document.getElementById("idade")
let nAltura = document.getElementById("altura")
let nSexo = document.getElementById("sexo") // não sei se ta certo

let bt = document.getElementById("calcula")

let res = document.getElementById("resultado")

const check = () => {
    
    let out = true
    
    if (Number(nPeso.value) == 0) {
        nPeso.value = undefined
        out = false
    }

    if (Number(nIdade.value) === 0) {
        nIdade.value = undefined
        out = false
    }
    
    if (Number(nAltura.value) === 0) {
        nAltura.value = undefined
        out = false
    }

    if (nSexo.value === "Selecionar") {
        out = false
    }

    return out
}

bt.addEventListener("click", () => {
    
    if (!check()) {
        alert("Preencha todos os campos para prosseguir")
        return
    }

    let tmb = 0;
    if (nSexo.value === "Masculino") {
        tmb = 10 * Number(nPeso.value) + 6.25 * Number(nAltura.value) - 5 * Number(nIdade.value) + 5
    } else if (nSexo.value === "Feminino") {
        tmb = 10 * Number(nPeso.value) + 6.25 * Number(nAltura.value) - 5 * Number(nIdade.value) - 161
    }

    res.textContent = `Seu TMB é de ${tmb}`
})