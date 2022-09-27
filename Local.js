const Pieza=require('./Pieza')
const Vendedor = require('./Vendedor');
const Suplente=require('./Suplente')
const VendedorMayorAntiguedad=require('./VendedorMayorAntiguedad')
const Administrativo=require('./Administrativo')

var Local= (function(){
    var empleados=[];
    var piezasLocal=[];
    var facturas=[];
    
    function agregarAdministrador(nombre,apellido,dni,sueldoFijo) {
        try {
            empleados.push(new Administrativo(nombre,apellido,dni,sueldoFijo));
        } catch (exception) {
            console.log(exception.mensaje);
        }
    }
    
    function agregarSuplente(nombre,apellido,dni,horasTrabajadas,sueldoXHoraTrabajado){
        try {
            empleados.push(new Suplente(nombre,apellido,dni,horasTrabajadas,sueldoXHoraTrabajado));
        } catch (exception) {
            console.log(exception.mensaje);
        }
    }

    function agregarVendedor(nombre,apellido,dni,comisionVendedor){
        try {
            empleados.push(new Vendedor(nombre,apellido,dni,comisionVendedor));
        } catch (exception) {
            console.log(exception.mensaje)
        }
    }
    
    function agregarVendedorMayorAntiguedad(nombre,apellido,dni,sueldoFijo,comisionVendedor){
        try{
            empleados.push(new VendedorMayorAntiguedad(nombre,apellido,dni,sueldoFijo,comisionVendedor));
        } catch (exception) {
            console.log(exception.mensaje)
        }
    }
    
    function agregarPieza(nombre,stock,valorPorUnidad) {
        try {
            piezasLocal.push(new Pieza(nombre,stock,valorPorUnidad));
        } catch (exception) {
            console.log(exception.mensaje)
        }
    }

    function calcularSueldo(){
        empleados.forEach(elemento => console.log("Sueldo de "+elemento.nombreCompleto()+": "+elemento.obtenerSueldo()+"\n"));
    }
    
    function mostrarFacturasPorId(id){
        facturas.forEach(elemento => {if(elemento.id==id){elemento.toString()}});
    }
    
    function sacarEmpleado(dni){
        empleados.filter(element => dni!=element.dni);
    }
    
    function ingresarVenta(dniVendedor,piezasAComprar){ //piezas=[[pieza,AComprar],[pieza,AComprar]]
        let vendedor;
        empleados.forEach(elemento => {if(elemento.compararDni(dniVendedor)){vendedor=elemento};}); 
        if (vendedor instanceof Vendedor) {
            piezasAComprar.forEach(element=>{ 
                piezasLocal.forEach(element2=>{
                    if (element[0]==element2.nombre) {
                        element[0]=element2;
                    }
                })
            })
    
    
            facturas.push(vendedor.venta(piezasAComprar));
        } 
    }


    function mostrarFacturas() {
        console.log("Las facturas son: ");
        facturas.forEach(element => element.toString());
    }

    function mostrarEmpleados(){
        empleados.forEach(element=>console.log(element));
    }
    
    return {
        calcularSueldo: calcularSueldo,
        mostrarFacturasPorId: mostrarFacturasPorId,
        ingresarVenta: ingresarVenta,
        mostrarFacturas: mostrarFacturas,
        agregarPieza: agregarPieza,
        agregarVendedorMayorAntiguedad: agregarVendedorMayorAntiguedad,
        agregarAdministrador: agregarAdministrador,
        agregarSuplente: agregarSuplente,
        agregarVendedor: agregarVendedor,
        sacarEmpleado: sacarEmpleado,
        mostrarEmpleados: mostrarEmpleados,
    }
    
    
})();

module.exports = Local;