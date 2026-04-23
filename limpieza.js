/*
 *   Crea una función llamada procesarCorreos que reciba este arreglo y devuelva un nuevo arreglo con las siguientes reglas:
 *  
 *  Limpieza: Elimina los espacios en blanco al principio y al final de cada correo.
 *  Normalización: Convierte todos los correos a minúsculas.
 *  Validación (Filtro): Solo deben incluirse en el arreglo final los correos que contengan el carácter "@".
 *  Seguridad (Guard Clause): Si la entrada no es un arreglo, debe retornar un mensaje de error.
 */

const correosRecibidos = [
    "  juan@gmail.com ", 
    "MARIA@HOTMAIL.COM", 
    "  pedro.ugalde@outlook.com", 
    "invalido-sin-arroba", 
    " lucia@yahoo.com  "
];

function procesarCorreos(correosRecibidos) {
    let correosProcesados = [];
    if (!Array.isArray(correosRecibidos)){
        return "Error: la entrada recibida no es un Array"
    }
    if (correosRecibidos.length == 0){
        return "Error: la lista esta vacia"
    }
    correosRecibidos.forEach((correo) => {
        if (correo.includes("@")){
            let correoLimpio = correo
                    .trim()
                    .toLowerCase()
            correosProcesados.push(correoLimpio)
        } else {
            return "Error: los correos no son validos"
        }
    })
    return correosProcesados
}

console.log(procesarCorreos(correosRecibidos))