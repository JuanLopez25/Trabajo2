const Local=require('./Local');

var Ferreteria= Local;

Ferreteria.agregarPieza("Polea",30,1000);
Ferreteria.agregarPieza("Tornillo",500,30);
Ferreteria.agregarPieza("Clavo",500,30);
Ferreteria.agregarPieza("Pegamento",5,1300);
Ferreteria.agregarPieza("Destornillador",2,4000);
Ferreteria.agregarPieza("Martillo",4,5000);
Ferreteria.agregarPieza("Cinta aislante",100,900);
Ferreteria.agregarPieza("Metro",7,2500);
Ferreteria.agregarPieza("Transformador",4,1000);
Ferreteria.agregarPieza("Llave inglesa",1,5000);
Ferreteria.agregarPieza("Linterna",30,2500);

Ferreteria.agregarAdministrador("Bauti","Colombres",1,1000);
Ferreteria.agregarVendedor("Rodrigo","De Paul",2,0.25);
Ferreteria.agregarVendedorMayorAntiguedad("Agus","Isoldi",3,50,0.25);
Ferreteria.agregarSuplente("Mechi","Colombres",4,50,0.9);
//----------------------------------------------------------------------
Ferreteria.agregarAdministrador("Juan","Lopez",5,-100);
Ferreteria.agregarVendedor("Mariano","Klecha",6,0);
Ferreteria.agregarVendedorMayorAntiguedad("Seba","Lernoud",7,-60,0.25);
Ferreteria.agregarSuplente("Agus","Grigaliunas",8,70,0);

Ferreteria.ingresarVenta(2,[["Polea",10],["Tornillo",10],["Clavo",10]]);
Ferreteria.ingresarVenta(3,[["Pegamento",2],["Destornillador",1],["Martillo",2]]);
//---------------------------------------------------------------------
Ferreteria.ingresarVenta(6,[["Cinta aislante",10],["Metro",2],["Transformador",2]]);
Ferreteria.ingresarVenta(7,[["Llave inglesa",1],["Linterna",15],["Polea",20]]);


Ferreteria.calcularSueldo();
//Ferreteria.mostrarFacturas();
//Ferreteria.mostrarEmpleados();