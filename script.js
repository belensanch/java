function totalApagar(cantidad, categoria) {
    const valorTicket = 200;
        let total = cantidad * valorTicket;
    switch (categoria) {
        case "estudiante":
            total = total - (total * 80/100)
            break;
        case "trainee":
            total = total - (total * 50/100)
            break;
        case "junior":
            total = total - (total * 15/100)
            break;
    }
    return total
}
let boton = document.getElementById("btnresumen")
boton.addEventListener ("click",  ()=>{
let cantidad = document.getElementById("cantidad") .value
let categoria = document.getElementById("categoria") .value
 
let valor = totalApagar(cantidad,categoria)

let divMensaje = document.getElementById("liveAlertPlaceholder") 
divMensaje.textContent = "Total a pagar: $" + valor
let style = document.getElementById("liveAlertPlaceholder") 
col

}
)




function resumen() {
    console.log(categoria.value)
    console.log(cantidad.value)
    cantidad.value
    if (categoria.value == "trainee") {
        alert("Recuerde presentar documentacion para trainee")
    }
    if (categoria.value == "estudiante") {
        alert("Recuerde presentar documentacion para estudiante")
    }
    if (categoria.value == "junior") {
        alert("Recuerde presentar documentacion para junior")
    }
    total.innerHTML = cantidad.value
}

function borrar() {
    const totalHtml = document.getElementById("liveAlertPlaceholder")
    totalHtml.innerHTML = "Total a pagar: $"
}