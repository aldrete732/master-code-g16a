// function sumatoria(num1,num2){
//     var total = num1 + num2;
//     console.log ('La suma total es: ' + total);
// }

// sumatoria(7,9);

// function resta(a,b,c){
//     var resultado= a-b-c;
//     console.log(resultado);
// }

// resta(10,23,56);

//tabla de multiplicar
// console.log('2 x 0 =', 2 * 0);

//funcion multiplicacion
// function tablaDelDos(){
//     for(i=0; i<10; i++)
//     {
//         console.log('2 x', i, '=', 2 * i);
//     }
// }
// tablaDelDos();

// function suma(num1, num2, num3){
//     var total= num1 + num2 + num3;
//     return 'El resultado es: ' + total
// }

// var valorSuma = suma(9,8,6);
// alert(valorSuma);

// function saludar(nombre, edad){
//     this.nombre = nombre;
//     this.edad = edad;
//     console.log('Hola mi nombre es: ' + this.nombre + ' y tengo ' + this.edad + ' años');
// }
// saludar('Jorge', 27);

// function mayorDeEdad (edad){
//     if(edad>18){
//         console.log('El usuario es mayor de edad');
//     }
//     else{
//         console.log('El usuario es menor de edad');
//     }
//     if(edad>100){
//         console.log('El usuario no existe');
//     }
// }
// mayorDeEdad(19);

//EJERCICIOS COMPLETAR CON LA CLASE GRABADA
var texto = prompt('Ingresa una cadena de texto: ');

function palindromo(texto){
    var textoSinEspacios = [];
    var indice = 0;

    for(var i=0; i<texto.length; i++){
        if(texto[i] == ' '){

        }
        else{
            textoSinEspacios[indice] = texto[i];
            indice++;
        }
    }
    //lectura de texto derecha a izquierda
    var indiceAlreves = (textoSinEspacios - 1);

    for(var i=0; i<textoSinEspacios.length; i++){
        if(textoSinEspacios[i] != textoSinEspacios[indiceAlreves]){
            return 'La oracion no es un palindromo';
        }
        else
        {
         indiceAlreves--;
        return 'La oracion es un palindromo';
    }
}
alert(palindromo(texto));