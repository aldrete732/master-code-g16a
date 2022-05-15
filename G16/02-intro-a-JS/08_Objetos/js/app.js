//DECLARACION OBJETO LITERAL
let Vehiculo = {
    Marca : 'Toyota',
    Color : 'Rojo',
    Modelo : 2022,
    Tipo : 'Sedan',
    Valor : 1200000,
    TipoLlanta : ['Pirelli', 'Michelin', 'GoodYear'],
    EnStock : true,
    Estado : function (estado){
        if(estado ==1){
            return 'El vehiculo se apagó';
        }
        else{
            return 'El vehiculo se encendio';
        }   
    },
    Mantenimiento : (estado) => estado == 1 ? console.log('El vehiculo ya termino su mantenimiento') : console.log('El vehiculo necesita mantenimiento')
}

console.log('El vehiculo es de marca ' + Vehiculo.Marca + 'y tiene un valor de: ' + Vehiculo.Valor);

//TEMPLATE STRING
console.log(`El vehiculo es de marca: ${Vehiculo.Marca} y tiene un valor de: ${Vehiculo.Valor}`);

//DESESTRUCTURACION DE OBJETOS
const {Tipo, Modelo, Color, Marca} = Vehiculo;
console.log(`El vehiculo es de color: ${Color} y es del año: ${Modelo}`);   

//ACCEDER ARREGLO DENTRO DE UNA PROPIEDAD
console.log(Vehiculo.TipoLlanta[1]);

//ACCEDER A UN METODO DEL OBJETO
console.log (Vehiculo.Estado(1));
console.log(Vehiculo.Estado(2));

console.log (Vehiculo.Mantenimiento(1));
console.log(Vehiculo.Mantenimiento(2));