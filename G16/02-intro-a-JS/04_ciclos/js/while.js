//Ejemplo de while
var nombreCompleto = prompt('Ingresa tu nombre completo');
var letraBuscar = prompt('Ingresa la letra que queires saber cuantas veces aparece en tu nombre');
var i = 0;
var letraActual;
var cantidad = 0;

//length es una funcion que nos dice cuantos caracteres tiene una variable
while(i<= nombreCompleto.length)
{
    //substring permite extraer una cantidad de caracteres especifica de un string
    letraActual = nombreCompleto.substring(i,i+1);

    //validamos si la letra es igual a la que pidio al usuario
    if(letraActual.toLocaleLowerCase() === letraBuscar.toLocaleLowerCase())
    {
        //variable contador mas utilizada
        cantidad ++;
    }

    //variable contador forma basica
    i = i + 1;
}

document.write(`La letra ${letraBuscar} aparece ${cantidad} veces en tu nombre`);