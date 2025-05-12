
// Ejercicio 5: Evaluación de calificaciones
// Contexto: promedio ponderado de calificaciones con estados: aprueba, refuerza, repite.

// Crear un arreglo de objetos para almacenar las materias
let materias = [];

// Solicitar al usuario el número de materias a ingresar
let numMaterias = parseInt(prompt("Ingrese el número de materias:"));

// Recopilar los datos de cada materia
for (let i = 0; i < numMaterias; i++) {
    let nombre = prompt(`Nombre de la materia ${i + 1}:`);
    let nota = parseFloat(prompt(`Nota de ${nombre}:`));
    let peso = parseFloat(prompt(`Peso de ${nombre}:`));
    materias.push({ nombre, nota, peso });
}

// Calcular el promedio ponderado
let sumaPonderada = 0;
let sumaPesos = 0;

for (let materia of materias) {
    sumaPonderada += materia.nota * materia.peso;
    sumaPesos += materia.peso;
}

let promedio = sumaPonderada / sumaPesos;

// Mostrar el resultado y determinar el estado del estudiante
console.log(`El promedio ponderado es: ${promedio.toFixed(2)}`);

if (promedio >= 3.5) {
    console.log("El estudiante aprueba.");
} else if (promedio < 2.5) {
    console.log("El estudiante debe repetir el curso.");
} else {
    console.log("El estudiante necesita reforzar.");
}