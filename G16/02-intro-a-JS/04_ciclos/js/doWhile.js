var nombreCompleto = prompt('Ingresa tu nombre completo');
var letraBuscar = prompt('Ingresa la letra que queires saber cuantas veces aparece en tu nombre');
var i = 0;
var letraActual;
var laEncontre = 0;
var msg;

//sintaxis de do while (se ejec)
do
{
    letraActual = nombreCompleto.substring(i, i+1);

    if(letraActual.toLocaleLowerCase() === letraBuscar.toLocaleLowerCase())
    {
        laEncontre = 1;
    }

    i++;
}

while(laEncontre === 0 && i <= nombreCompleto.length)

if(laEncontre === 1)
{
    msg = `Enhorabuena hemos encontrado la letra ${letraBuscar}, en la posición ${i}`
}
else
{
    msg = `Lo sentimos no hemos encontrado la letra ${letraBuscar} en tu nombre`
}
document.write(msg);