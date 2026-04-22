const usuarios = [
    { nombre: "Ana", activa: true },
    { nombre: "Beto", activa: false },
    { nombre: "Carla", activa: true },
    { nombre: "David", activa: 0 } // ¡Cuidado aquí!
];

// filtra los usuarios activos
let usuarios_activos = usuarios.filter((usuario) => usuario.activa == true);
console.log(usuarios_activos);

const resultadosTests = [
    { id: 1, nombre: "Login", estado: "passed" },
    { id: 2, nombre: "Checkout", estado: "failed" },
    { id: 3, nombre: "Registro", estado: "passed" },
    { id: 4, nombre: "Carrito", estado: "pending" },
    { id: 5, nombre: "Register", estado: "failed"},
    { id: 5, nombre: "Register", estado: NaN}
];

// devuelve los nombres de los Test fallidos
function reportar_fallos(resultadosTest){
    if (!Array.isArray(resultadosTest)){
        return "Error: el formato de datos no es un Array"
    }
    let test_fallidos = resultadosTest.filter((test) => test.estado === "failed");  // filter: test failed
    return test_fallidos.map((test) => test.nombre);                                // map: solo los nombres
}

let lista_test_fallidos = reportar_fallos(resultadosTests);
console.log(lista_test_fallidos);