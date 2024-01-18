'use strict'
let nombre = prompt('Ingrese un nombre, ingresa la primera letra con mayuscula')
let students = ["Juan","Jose","Pedro","Maria","Alejandra"];
//Mostrar en un alert: "Si se encuentra" o "No se encuentra"

if (students.find(nombrePrompt => nombrePrompt === nombre)) {
    alert("¡Se encuentra en la lista!");
} else {
    alert("No se encuentra en la lista.");
}