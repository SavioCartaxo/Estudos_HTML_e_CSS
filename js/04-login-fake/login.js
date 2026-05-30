let mEmail = document.getElementById("email")
let mPassworld = document.getElementById("passworld")

let bt = document.getElementById("bt")
let mTermos = document.getElementById("termos")

const checa = () => {
    let email = mEmail.value
    let pass = mPassworld.value

    if (email === "" || pass === "") {
        alert("Preencha os campos obrigatórios")
        return
    } else if (!mTermos.checked) {
        alert("Você precisa concordar com os termos e serviços")
        return
    } else if (email === "adm@gmail.com" && pass === "12345") {
        alert("Tudo ok chefe")
    } else {
        alert("Email ou senha inválidos.")
    }

    mEmail.value = null
    mPassworld.value = null
}

bt.addEventListener("click", () => {
    checa()
})

mEmail.addEventListener("keydown", (event) => {
    if (event.key === "Enter")
        checa()
})

mPassworld.addEventListener("keydown", (event) => {
    if (event.key === "Enter")
        checa()
})