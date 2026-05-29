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