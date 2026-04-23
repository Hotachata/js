/**
 * Crea una función asíncrona llamada auditarTareasUsuario(idUsuario).
 * 
 * Petición: Usa fetch para obtener la lista completa de tareas desde esta 
 * URL: https://jsonplaceholder.typicode.com/todos.
 * 
 * Validación de Red: Si la respuesta no es exitosa (puedes usar if (!respuesta.ok)), 
 * retorna "Error al obtener tareas".
 * 
 * Lógica de Filtro:
 * Filtra las tareas que pertenezcan al idUsuario solicitado (la propiedad es userId).
 * De esas tareas, cuenta cuántas tienen la propiedad completed: false.
 * 
 * Resultado: Debe retornar un string que diga: "El usuario [id] tiene [X] tareas pendientes".
 * Si el idUsuario no es un número, retorna "ID no válido".
 */

async function auditarTareasUsuario(id){
    try{

        const lista_tareas = await fetch("https://jsonplaceholder.typicode.com/todos")
        if (!lista_tareas.ok) return "Error: no se pudo obtener las tareas."
        const todasLasTareas = await lista_tareas.json();
        
        const tareas_del_usuario = todasLasTareas.filter((usuario) => usuario.userId == id)
        if (!tareas_del_usuario) return "Error: usuario no existe"

        // const tareasIncompletas = tareasDelUsuario.filter(t => !t.completed).length;

        contador_tareas_incompletas = 0;
        tareas_del_usuario.forEach((tarea) => {
            if (!tarea.completed) {
                contador_tareas_incompletas+=1
            }
        })

        return `El usuario ${id} tiene ${contador_tareas_incompletas} tareas pendientes`
    } catch (e) {
        return `Error: ${e.message}, no se pudo conectar.`
    }
}

auditarTareasUsuario(1).then(console.log);