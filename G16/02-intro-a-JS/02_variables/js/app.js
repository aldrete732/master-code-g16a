//Paso 1: Definir variables para datos de entrada
var nombreCompleto;
var añoNacimiento;
var añoActual;

//Paso 1.1 Definir variables de uso del algoritmo
var edad;

//Paso 2: Solicitar los datos al usuario
nombreCompleto = prompt('Ingresa tu nombre completo');
añoNacimiento = prompt('Ingresa el año en que naciste');
añoActual = prompt('Ingresa el año actual');

//Paso 3: Ejecutar la logica del programa
edad = añoActual - añoNacimiento;
if (edad < '10'){
    document.write('Hola ' + nombreCompleto  + ',eres un niño');
}else if (edad >= '11' && edad <='18'){
    document.write('Hola ' + nombreCompleto  + ',eres un adolecente');
}else if (edad >= '19' && edad <='30'){
    document.write('Hola ' + nombreCompleto  + ',eres un adulto joven');
}else if (edad >= '31' && edad <='49'){
    document.write('Hola ' + nombreCompleto  + ',eres un adulto');
}else (edad >= '50' && edad <='80')
    document.write('Hola ' + nombreCompleto  + ',eres un adulto mayor');



//Paso 4: Definir la salida de los datos
//document.write('Hola ' + nombreCompleto  + ',tu edad es: ' + edad);