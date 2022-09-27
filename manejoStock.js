const Excepcion= require('./Excepcion');

var manejoStock= (function() {
    function hayStock(piezaCantComprar){
        return piezaCantComprar[0].stock>=piezaCantComprar[1];
    }

    function agregarStock(pieza,cantidadAgregada){
        pieza.stock+=cantidadAgregada;
    }

    function peticionStock(piezaCantComprar) {
        if (hayStock(piezaCantComprar)) {
            piezaCantComprar[0].stock-=piezaCantComprar[1];
        } else if(piezaCantComprar[0].nombre==undefined) {
            var NuevaExcepcion= new Excepcion("Error: la pieza no existe\n");
            throw NuevaExcepcion;
        }
        else {
            var NuevaExcepcion= new Excepcion("Error: no hay suficiente stock de "+piezaCantComprar[0].nombre+"\n");
            throw NuevaExcepcion;
        }
    }

    return {
        hayStock: hayStock,
        agregarStock: agregarStock,
        peticionStock: peticionStock
    }

})();

module.exports= manejoStock;

