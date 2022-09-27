const Vendedor = require('./Vendedor');
const Excepcion= require('./Excepcion')

function VendedorMayorAntiguedad(nombre,apellido,dni,sueldoFijo,comisionVendedor){
    if(sueldoFijo<0) {
        var NuevaExcepcion= new Excepcion("Error: sueldo negativo de "+nombre+" "+apellido+"\n");
        throw NuevaExcepcion;
    } else if (sueldoFijo==0) {
        var NuevaExcepcion= new Excepcion("Error: sueldo igual a 0$ de "+nombre+" "+apellido+"\n");
        throw NuevaExcepcion;
    }
    else if (comisionVendedor<=0 || comisionVendedor>=1) {
        var NuevaExcepcion= new Excepcion("Error: comision invalida de "+nombre+" "+apellido+"\n");
        throw NuevaExcepcion;
    }
    else {
        Vendedor.call(this,nombre,apellido,dni,comisionVendedor);
        var sueldo=sueldoFijo;

        this.obtenerSueldo=function(){
            var precio=0;
            if(this.facturas!=[]){
                this.facturas.forEach(elemento => precio+=((elemento.precioTotal())*(this.comision)));
            }
            return (precio+sueldo);
        }
    }
}

VendedorMayorAntiguedad.prototype = Object.create(Vendedor.prototype);
VendedorMayorAntiguedad.prototype.constructor = VendedorMayorAntiguedad;

module.exports = VendedorMayorAntiguedad;