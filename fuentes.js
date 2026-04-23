/**
 * Crea una función llamada obtenerReporteUsuario que reciba un ID de usuario y devuelva un objeto con el 
 * resumen de su actividad.
 * 
 * Validación de Identidad: Si el ID no existe en la lista de usuarios, debe retornar: 
 * "Error: Usuario no encontrado".
 * Cálculo de Compras: Debe buscar todas las compras que pertenecen a ese usuarioId.
 * Salida esperada: Un objeto
 * Caso Borde: Si el usuario existe pero no tiene compras, totalGastado debe ser 0 y cantidadProductos también 0.
 */

const usuarios = [
    { id: 1, nombre: "Alicia" },
    { id: 2, nombre: "Roberto" },
    { id: 3, nombre: "Zuly" }
];

const compras = [
    { usuarioId: 1, producto: "Teclado", monto: 500 },
    { usuarioId: 3, producto: "Mouse", monto: 200 },
    { usuarioId: 1, producto: "Monitor", monto: 1500 }
];

function obtenerReporteUsuario(id_usuario){
    let usuario = usuarios.find((usuario) => usuario.id == id_usuario)
    if (usuario){
        let compras_del_usuario = compras.filter((compra) => compra.usuarioId == id_usuario)
        let suma_total = 0;
        let compras_total = 0;
        compras_del_usuario.map((compra) => {
            suma_total += compra.monto
            compras_total+=1
        })
        let reporte_usuario = {
            nombre: usuario.nombre,
            totalGastado: suma_total,               // La suma de todos sus montos
            cantidadProductos: compras_total        // Cuántos productos compró
        }
        return reporte_usuario
    } else {
        return "Error: usuario no encontrado"
    }
}

console.log(obtenerReporteUsuario(2))