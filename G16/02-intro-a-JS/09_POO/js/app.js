//DEFINICION DE CLASES DE PROGRAMACION ORIENTADA A OBJETOS (POO)
class Vehiculo {
    constructor(marca, modelo, valor, color){
        this.Vehiculo = marca;
        this.Modelo = modelo;
        this.Valor = valor;
        this.Color = color;
    }
}

let vehiculo1 = new Vehiculo ('Toyota', 2022, 230000, 'Blanco');
let vehiculo2 = new Vehiculo ('Nissan', 2021, 2000000, 'Negro');

console.log(vehiculo1.marca);