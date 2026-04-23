async function obtenerDatos() {
    try {
        // El 'await' detiene la ejecución hasta que la promesa se resuelva
        const respuesta = await fetch('https://api.ejemplo.com/productos');
        
        // También debemos esperar a que el cuerpo se convierta a JSON
        const datos = await respuesta.json();
        
        return datos;
    } catch (error) {
        // Como QA, el 'catch' es donde reportamos que algo falló
        return "Error al conectar con el servidor";
    }
}

async function buscarUsuarioEnServidor(id){

    /**
     * Si el ID es mayor a 10, la API te va a regresar un objeto vacío o un error. 
     * Si el usuario no tiene nombre (!user.name), la función debe retornar: "Usuario inexistente".
     */

    if (id>=10) return "Error: ID invalido (ID >= 10)"

    try {
        
        const respuesta = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const usuario = await respuesta.json()
        if (!usuario.name) return "Error: el usuario no tiene nombre"
        return usuario.name
        
    } catch (error) {
        return `Error: ${error}`
    }
}

buscarUsuarioEnServidor(1).then(console.log);