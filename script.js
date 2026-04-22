console.log(5 + "5");   // "55" (Número + String = String concatenado)
console.log(5 - "2");   // 3 (Aquí sí lo resta, ¡qué loco!)
console.log(typeof NaN); // "number" (Uno de los bugs más famosos de JS)

const edad = "21";
let puedeEntrar = false;

if (edad == 21) {
    puedeEntrar = true;
}

console.log(puedeEntrar);

const ticket = {
    id: "BUG-101",
    titulo: "Error en login",
    prioridad: "Alta",
    asignadoA: null
};

// Acceso normal
console.log(ticket.titulo); 

// Acceso seguro (Optional Chaining) - ¡Súper tip de QA!
// Si 'asignadoA' fuera undefined, esto no rompe la app, solo devuelve undefined.
console.log(ticket.asignadoA?.nombre);

// Si es una sola línea, el 'return' es implícito (no hay que escribirlo)
const sumar = (a, b) => a + b;

// Si tiene llaves, DEBES poner 'return' o devolverá undefined (Bug común)
const restar = (a, b) => {
    return a - b; 
};