let mItem = document.getElementById("item")
let bt = document.getElementById("adiciona")

bt.addEventListener("click", () => {
    let texto_para_adicionar = mItem.value
    let lista = document.getElementById("lista")

    if (texto_para_adicionar === "") 
        return

    let item = document.createElement("li")
    item.textContent = texto_para_adicionar

    lista.appendChild(item)
    mItem.value = null
})

mItem.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        let texto_para_adicionar = mItem.value

        if (texto_para_adicionar === "") 
            return

        let lista = document.getElementById("lista")
        let item = document.createElement("li")
        item.textContent = texto_para_adicionar

        lista.appendChild(item)
        mItem.value = null
    }
})

let mLista = document.getElementById("lista")

mLista.addEventListener("click", (event) => {
    if (event.target.tagName === "LI" && !event.target.textContent.endsWith("(Concluído)")) {
        event.target.textContent += " (Concluído)";
    }
})