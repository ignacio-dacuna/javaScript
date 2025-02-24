/*
        la idea es hacer un calculador de turnos para farmacity(supuestanete), porque me gusto la idea que vi en la diapo 
        va aconsistir en:


        variable de tiempo estimado 
        variables de turnos uqe hay por delante
        multiplicamos estos 
        nos da la cantidad de tiempo
        ahora a eso lo encirro en una funcion
        y desp a esa funcion la guardo en u do while para hacer el bucle de si / no
*/ 


alert("Bienvendio/a a nuestro calculador estimado de tiempo de espera")


function gestionarTurnos() {
    let numDeTurno = +prompt("Ingrese el número de turno que tiene asignado el día de la fecha");
    let espera = 0;
    let tiempo = 15;


    if (numDeTurno >= 2) {
        let mensaje = "usted tiene " + (numDeTurno - 1) + " turnos por delante suyo";
        alert(mensaje);
        
        espera = espera + tiempo * numDeTurno;
        let mensaje2 = "usted tiene " + (espera - tiempo) + " minutos de espera";
        alert(mensaje2);
    }
    if (numDeTurno == 1) {
        alert("Usted no va a tener tiempo de espera");
    }


    let continuar = prompt('Desea volver a preguntar por la demora? si/no');
    while (continuar != 'no' && continuar != 'si') {
        continuar = prompt('Debe ingresar "no" o "si"');
    }
    return continuar;
}


do {
    continuar = gestionarTurnos();
} while (continuar == 'si');




alert("Muchas gracias por usar el calculador, vuelva pronto  :)")
