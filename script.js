let continuar = true
 
let precioEuro = 500
let precioDolar = 800

while (continuar){
    let moneda = Number(prompt("Ingresa el tipo de Moneda\n 1.Euro\n 2.Dolar"))
    if (moneda === 1 ) {
        let cantidadEuro = Number(prompt("Cantidad de euros"))
        let cantidadPeso = convertirmoneda(cantidadEuro, precioEuro)
        alert("Vas a Comprar " + cantidadEuro + " Euros, que te cuestan " + cantidadPeso)
    } else if(moneda === 2){
        let cantidadDolar = Number(prompt("Cantidad de dolares"))
        let cantidadPeso = convertirmoneda(cantidadDolar, precioDolar)
        alert("Vas a Comprar " + cantidadDolar + " Dolares, que te cuestan " + cantidadPeso)
    }
    let seguir = Number(prompt("¿Quiere seguir?"))
    if (seguir === 1){
        continuar = true
    } else {
        continuar = false
    }


}






function convertirmoneda(cantidadmoneda, valormoneda) {
    return cantidadmoneda * valormoneda
}



