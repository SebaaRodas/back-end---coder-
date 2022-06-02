const Contenedor = require('./contenedor');
const Producto = require('./producto');

const archivo = new Contenedor('productos.txt');
const corona = new Producto('Cerveza Corona', 250);
const heineken = new Producto('Cerveza Heineken', 300);
const brahma = new Producto('Cerveza Brahma', 200);
const patagonia = new Producto('Cerveza Patagonia', 300);

async function main(){
   // guarda los productos y le asigna el id correspondiente 
   await archivo.save(corona);
   await archivo.save(heineken);
   await archivo.save(brahma);
   await archivo.save(patagonia);
   
   // busca por id y lo muestra por consola 
   await archivo.getById(4);
   await archivo.getById(2);
   
   // muestra por consola todos los productos 
   await archivo.getAll();

   await archivo.deleteById(3);

   // borra el archivo "productos.txt"
   // await archivo.deleteAll();
}
main();

