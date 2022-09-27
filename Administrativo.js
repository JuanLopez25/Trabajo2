const Empleado = require('./Empleado');
const Excepcion= require('./Excepcion');

function Administrativo(nombre,apellido,dni,sueldoFijo){
    
    if (sueldoFijo<0) {
        var NuevaExcepcion= new Excepcion("Error: El sueldo es negativo de "+nombre+" "+apellido+"\n");
        throw NuevaExcepcion;
    } else if  (sueldoFijo==0){
        var NuevaExcepcion= new Excepcion("Error: El sueldo es igual a 0 de "+nombre+" "+apellido+"\n");
        throw NuevaExcepcion;
    }
    else {
        Empleado.call(this,nombre,apellido,dni);
        var sueldo=sueldoFijo;
        //--------------------------------------
        this.obtenerSueldo=function(){
            return sueldo;
        }
    }
}

Administrativo.prototype = Object.create(Empleado.prototype);
Administrativo.prototype.constructor = Administrativo; 


module.exports = Administrativo;






