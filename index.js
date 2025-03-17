let tareas = [];

function agregarTarea() {
    let tarea = prompt("Ingresa la tarea que necesitas realizar:");
    let horario = prompt("Ingresa el horario para esta tarea (formato HH:MM):");

    let nuevaTarea = {
        tarea: tarea,
        horario: horario
    };

    tareas.push(nuevaTarea);

    alert("Tarea agregada: " + tarea + " a las " + horario);
}

function mostrarTareas() {
    if (tareas.length === 0) {
        alert("No hay tareas agregadas.");
        return;
    }

    let listaTareas = "Lista de tareas:\n";

    tareas.forEach((tarea, index) => {
        listaTareas += `${index + 1}. ${tarea.tarea} - ${tarea.horario}\n`;
    });

    alert(listaTareas);
}
