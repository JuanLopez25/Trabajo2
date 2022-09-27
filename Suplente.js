const Empleado = require('./Empleado');
const Excepcion= require('./Excepcion');

function Suplente(nombre,apellido,dni,horasTrabajadas,sueldoXHoraTrabajado){
    if (horasTrabajadas<0) {
        var NuevaExcepcion= new Excepcion("Error: Las horas son negativas de "+nombre+" "+apellido+"\n");
        throw NuevaExcepcion;
    }else if (sueldoXHoraTrabajado<0) {
        var NuevaExcepcion= new Excepcion("Error: El sueldo por hora es negativo de "+nombre+" "+apellido+"\n");
        throw NuevaExcepcion;
    }else if (horasTrabajadas==0) {
        var NuevaExcepcion= new Excepcion("Error: Las horas son igual a 0 de "+nombre+" "+apellido+"\n");
        throw NuevaExcepcion;
    }else if (sueldoXHoraTrabajado==0) {
        var NuevaExcepcion= new Excepcion("Error: El sueldo es igual a 0 de "+nombre+" "+apellido+"\n");
        throw NuevaExcepcion;
    }else {
        Empleado.call(this,nombre,apellido,dni);
        var horas=horasTrabajadas;
        var sueldoXHora=sueldoXHoraTrabajado;
        //--------------------------------------------------
        this.obtenerSueldo= function(){
            return (horas*sueldoXHora);
        }
    }
}

Suplente.prototype = Object.create(Empleado.prototype);
Suplente.prototype.constructor = Suplente; 

module.exports = Suplente;