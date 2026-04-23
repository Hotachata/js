const usuarios = [
    { id: 1, nombre: "Logan", verificado: true },
    { id: 2, nombre: "Ringo", verificado: true },
    { id: 3, nombre: "John", verificado: false },
    { id: 4, nombre: "Paul", verificado: false },
    { id: 5, nombre: "George", verificado: true},
    { id: 6, nombre: "Ariadna", verificado: false}
];

// "¿Puedes buscar al usuario con ID 5 y decirme si tiene su cuenta verificada?"

function buscarUsuario(usuarios, id_usuario){
    const usuario_buscado = usuarios.find((usuario) => usuario.id == id_usuario);           // buscamos al usuario
    if (usuario_buscado){
        // regresa un mensaje segun el status (verificado) del usuario buscado
        return usuario_buscado.verificado ? "Cuenta verificada" : "Cuenta no verificada";
    } else {
        return "Error: usuario invalido";
    }
}

const id_usuario = 5;
console.log(buscarUsuario(usuarios, id_usuario))

// "¿Cuántos productos de la categoría 'Lácteos' tienen un precio mayor a $50?"
const productos = [
    { categoria: "Lacteos", producto: "Leche", precio: 60},
    { categoria: "Lacteos", producto: "Yogurt", precio: 70},
    { categoria: "Lacteos", producto: "Queso", precio: 110},
    { categoria: "Lacteos", producto: "Dedo de queso", precio: 30},
    { categoria: "Jardineria", producto: "Pala", precio: 80},
    { categoria: "Jardineria", producto: "Maceta", precio: 30}
];

function precioCategoria(productos, categoria){
    if (!Array.isArray(productos)) return "Error: la lista es invalida"
    if (typeof categoria != 'string') return "Error: la categoria es invalida"
    let categoria_valida = productos.find((producto) => producto.categoria == categoria);
    if (categoria_valida){
        let productos_filtrados = productos.filter((producto) => producto.categoria===categoria && producto.precio >= 50);
        return productos_filtrados
    } else {
        return "Error: la categoria no existe en la lista de productos"
    }
}

console.log(precioCategoria(productos, "Lacteos"))

// "Tengo una lista de objetos {nombre, apellido}. Dame una lista de strings con el nombre completo."

const nombres = [
    { id: 1, nombre: "Ringo", apellido: "Starr"},
    { id: 2, nombre: "Paul", apellido: "McCartney"},
    { id: 3, nombre: "John", apellido: "Lennon"},
    { id: 4, nombre: "George", apellido: "Harrison"}
]

function nombreCompleto(nombres){
    return nombres.map((persona) => `${persona.nombre} ${persona.apellido}`)
}

console.log(nombreCompleto(nombres))