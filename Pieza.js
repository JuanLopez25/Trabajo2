const Excepcion= require('./Excepcion');

function Pieza(tipoDePieza,stock,valorPorUnidad){
    if (valorPorUnidad<0) {
        var NuevaExcepcion= new Excepcion("Error: la pieza " + tipoDePieza+ " tiene un valor negativo\n");
        throw NuevaExcepcion;
    } else if (valorPorUnidad==0) {
        var NuevaExcepcion= new Excepcion("Error: la pieza" + tipoDePieza+ " tiene un valor de 0$\n");
        throw NuevaExcepcion;
    } else {
        this.nombre=tipoDePieza;
        this.valor=valorPorUnidad;
        this.stock=stock;
    }
}

module.exports= Pieza;