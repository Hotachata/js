const inventario = {
    electronica: [
        { producto: "Laptop", precio: 1500, stock: 5 },
        { producto: "Monitor", precio: 300, stock: 0 }
    ],
    papeleria: [
        { producto: "Cuaderno", precio: 5, stock: 20 },
        { producto: "Plumas", precio: 2, stock: 100 }
    ],
    limpieza: null // ¡Ojo aquí!
};


// nombres de los productos que tienen stock mayor a 0
function obtenerProductosDisponibles(departamento){
    // validacion de entrada
    if (typeof departamento != 'string'){
        return "Error: datos invalidos"
    }
    // validacion de contenido
    if (!Array.isArray(inventario[departamento])){      // si es undefined, null, etc
        return "Error: el departamento no existe o no tiene productos"
    }
    // logica
    let lista_productos = inventario[departamento]
        .filter((producto) => producto.stock > 0)
        .map((producto) => producto.producto)
    return lista_productos
}

console.log(obtenerProductosDisponibles("papeleria"))