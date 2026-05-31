const atualizaPlaceHolder = () => {
    let mOpicao = document.getElementById("option")
    let mOp1 = document.getElementById("op1")
    let mOp2 = document.getElementById("op2")
    let opcao = mOpicao.value
    
    if (opcao === "c_to_f") {
        mOp1.placeholder = "Valor em celcils..."
        mOp2.placeholder = "Valor em Fareheint..."
    } else {
        mOp1.placeholder = "Valor em Fareheint..."
        mOp2.placeholder = "Valor em celcils..."
    }
}

const converter = () => {
    let mOpicao = document.getElementById("option")
    let mOp1 = document.getElementById("op1")
    let mOp2 = document.getElementById("op2")
 
    if (mOpicao.value === "c_to_f") {
        mOp2.value = Number(mOp1.value) * 9 / 5 + 32
    } else {
        mOp2.value = (Number(mOp1.value) - 32) / 9 * 5
    }
}

document.addEventListener("DOMContentLoaded", () => {
    atualizaPlaceHolder()
})

let mOpcion = document.getElementById("option")
mOpcion.addEventListener("change", () => {
    atualizaPlaceHolder()
    converter()
})

document.getElementById("op1").addEventListener("input", converter);
document.getElementById("option").addEventListener("change", converter);