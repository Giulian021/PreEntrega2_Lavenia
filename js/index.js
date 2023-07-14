const membresias = [
    { nombre: "Señales de trading", precio: 500 },
    { nombre: "Membresía Real Estate", precio: 500 },
    { nombre: "Experto en Ecommerce", precio: 500 },
    { nombre: "Leyenda de las Finanzas", precio: 1000 },
];

let carrito = [];

let seleccion = prompt("¿Hola, desea comprar una membresía? (si o no)");

while (seleccion !== "si" && seleccion !== "no") {
    alert("Por favor, ingresa 'si' o 'no'");
    seleccion = prompt("¿Hola, desea comprar algo? (si o no)");
}

if (seleccion === "si") {
    alert("A continuación nuestras membresías");
    let todasLasMembresias = membresias.map(
        (membresia) => membresia.nombre + " " + membresia.precio + "$"
    );
    alert(todasLasMembresias.join(" - "));
} else if (seleccion === "no") {
    alert("¡Gracias por venir, hasta pronto!");
}

while (seleccion !== "no") {
    let membresia = prompt("Agrega un producto a tu carrito");
    let precio = 0;

    if (
        membresia === "Señales de trading" ||
        membresia === "Membresía Real Estate" ||
        membresia === "Experto en Ecommerce" ||
        membresia === "Leyenda de las Finanzas"
    ) {
        switch (membresia) {
            case "Señales de trading":
            case "Experto en Ecommerce":
            case "Membresía Real Estate":
                precio = 500;
                break;
            case "Leyenda de las Finanzas":
                precio = 1000;
                break;
            default:
                break;
        }

        let unidades = parseInt(
            prompt("¿Cuántos meses quiere de membresía?")
        );

        carrito.push({ membresia, meses: unidades, precio });
        console.log(carrito);
    } else {
        alert("No tenemos esa membresía por ahora");
    }

    seleccion = prompt("¿Desea seguir comprando?");
}

while (seleccion === "no") {
    alert("¡Gracias por su compra! ¡Hasta luego!");

    carrito.forEach((carritoFinal) => {
        console.log(
            `Membresía: ${carritoFinal.membresia}, unidades: ${carritoFinal.meses}, total a pagar por las membresías: ${
                carritoFinal.meses * carritoFinal.precio
            }`
        );
    });

    break;
}

const total = carrito.reduce(
    (acc, el) => acc + el.precio * el.meses,
    0
);
console.log(`El total a pagar por su compra es: ${total}`);
