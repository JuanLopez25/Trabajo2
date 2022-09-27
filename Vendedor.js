const Empleado = require('./Empleado');
const Excepcion = require('./Excepcion');
const Factura = require('./Factura');

function Vendedor(nombre,apellido,dni,comisionVendedor){
    if (comisionVendedor<=0 || comisionVendedor>=1) {
        var NuevaExcepcion= new Excepcion("Error: comision invalida de "+nombre+" "+apellido+"\n");
        throw NuevaExcepcion;
    }
    else {
        Empleado.call(this,nombre,apellido,dni);
        this.comision=comisionVendedor;
        this.facturas=[];
        
        this.venta=function(piezas){
            let fac=new Factura(this.Vendedor,piezas);
            this.facturas.push(fac);
            return fac;
        }
        
        this.obtenerSueldo=function(){
            if (!this.facturas.length) {
                return ("Error no posee ventas\n")
            }else {
                var precio=0;
                this.facturas.forEach(elemento => precio+=((elemento.precioTotal())*(this.comision)));
                return precio;
            }
        }
    }
}

Vendedor.prototype = Object.create(Empleado.prototype);
Vendedor.prototype.constructor = Vendedor;

module.exports = Vendedor;