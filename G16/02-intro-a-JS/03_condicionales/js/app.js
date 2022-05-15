//paso 1: definimos variables de entrada y uso interno del algoritmo
var nombreCompleto;
var añoNacimiento, añoActual;
var genero;
var viveNortePais;
var embarazada;
var siNueveSemanasGestacion;

//paso 2: solicitar datos al usuario
nombreCompleto = prompt('Ingresa tu nombre completo');
añoNacimiento = prompt('Ingresa tu año de nacimiento');
añoActual = prompt('Ingresa el año actual');
genero = prompt('Selecciona tu género: F=Femenino, M=Masculino');
viveNortePais = ('¿Vives en algun estado al norte del país? Respuestas: S o N');

//paso 3: logica
edad = añoActual - añoNacimiento;

//validamos si la persona es menor a 18 años
if (edad < '18')
{
    alert(`Lo sentimos ${nombreCompleto}, aún no puedes vacunarte`);
}
else
{
    viveNortePais = prompt('¿Vives en el norte del país? Respuesta S o N');
    if(viveNortePais === 'S')
    {
        if(genero.toUpperCase() === 'F')
        {
            embarazada = prompt('¿Estas embarazada? Respuesta: S o N');
            //validamos si esta embarazada o no
            if(embarazada.toUpperCase() === 'S')
            {
                siNueveSemanasGestacion = prompt('¿Tienes más de 9 semanas de gestación? Respuesta: S o N');
    
                //validamos si tiene mas de 9 semanas de gestación
                if(siNueveSemanasGestacion.toUpperCase() === 'S')
                {
                    alert(`Felicitaciones ${nombreCompleto}, ya te puedes vacunar`)
                }
                else
                {
                    alert(`Lo sentimos ${nombreCompleto}, no te puedes vacunar`)
                }
            }
        }
        else
        {
            alert(`Felicidades ${nombreCompleto}, ya te puedes vacunar`)
        }
    else
    }
    //validamos si es masculino o femenino

}