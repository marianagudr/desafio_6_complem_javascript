class Producto {
    constructor(nombre, tipo, precio){
        this.nombre = nombre;
        this.tipo = tipo;
        this.precio = precio;
    }
}

class Tienda {
    constructor(nombre){
        this.nombre = nombre;
        this.productos = [];
    }
    agregarProductos(producto){
        this.productos.push(producto);
    }
}

const tiendaOnLine = new Tienda("Tienda online");

while (tiendaOnLine.productos.length < 3) {
    nombre = prompt("Ingrese el nombre del producto:");
    tipo = prompt("Ingrese el tipo de producto:");
    precio = Number(prompt("Ingrese el precio del producto:"));
    tiendaOnLine.agregarProductos(new Producto(nombre, tipo, precio));
}

tiendaOnLine.productos.sort((a,b) => {
    if (a.precio < b.precio) {
        return -1;
    }
    if (a.precio > b.precio) {
        return 1;
    }
    return 0;
})
   
console.log(tiendaOnLine);
