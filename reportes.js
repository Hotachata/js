/*
*   Crear una función llamada contarBugsCriticos que analice todos los sprints y devuelva un objeto 
*   con el conteo total de bugs que cumplen dos condiciones:
*   Tienen severidad "alta".
*   No han sido resueltos (resuelto: false).
*/

const reporteSprints = [
    {
        sprint: 1,
        bugs: [
            { id: "A1", severidad: "alta", resuelto: true },
            { id: "A2", severidad: "baja", resuelto: false }
        ]
    },
    {
        sprint: 2,
        bugs: [
            { id: "B1", severidad: "alta", resuelto: false },
            { id: "B2", severidad: "media", resuelto: false },
            { id: "B3", severidad: "alta", resuelto: false }
        ]
    }
];

// conteo total de bugs con severidad alta y no resueltos
function contarBugsCriticos(reporteSprints) {
    let contador=0;

    reporteSprints.forEach((sprint) => {
        sprint.bugs.forEach((bug) => {
            if (bug.severidad === "alta" && bug.resuelto === false){
                contador+=1
            }
        })
    })

    return contador
}

console.log(contarBugsCriticos(reporteSprints))