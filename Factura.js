const Pieza= require('./Pieza');
const manejoStock= require('./manejoStock')

var Factura= (function(){
    var contador= 0;
    newFactura= function (vendedorACargo,piezasVendidas) {
        var moduloStock= manejoStock;
        this.vendedor=vendedorACargo;
        this.piezas=piezasVendidas; // [[Pieza1,10],[Pieza2,5]]
        contador+=1;
        this.id=contador;
        this.Valor=-1;
        
        this.precioTotal=function(){
            if (this.Valor==-1) {
                this.Valor=this.calcularValor();
            } 
            return this.Valor;
        }

        this.calcularValor= function(){
            var precio=0;
            var precioParcial;
            var temporal= (this.piezas).filter(pieza =>moduloStock.hayStock(pieza));
            this.piezas.forEach(element => {
                try {
                    moduloStock.peticionStock(element);
                    precioParcial=element[0].valor;
                    precio+=precioParcial*element[1];
                } catch (exception) {
                    console.log(exception.mensaje);
                }
            });
            this.piezas= temporal;
            return precio;
        }
        
        this.toString=function(){
            var ultimo=": a un precio total de "+this.precioTotal()+"\n";
            var mensaje="Factura "+this.id+": se vendio";
            this.piezas.forEach(element => mensaje=mensaje+", "+element[1]+" "+element[0].nombre);
            mensaje=mensaje+ultimo;
            console.log(mensaje);
        }

    }
    return newFactura;
})();








module.exports = Factura;