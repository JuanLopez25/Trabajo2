function Empleado(nombre,apellido,dni){
    this.nombre=nombre;
    this.apellido=apellido;
    this.dni=dni;
    this.nombreCompleto= function(){
        return(this.nombre+" "+this.apellido);
    }
    this.compararDni= function(dniBuscado) {
        return (this.dni==dniBuscado);
    }
}
module.exports = Empleado;