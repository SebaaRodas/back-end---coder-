const Contenedor = require('./contenedor');
const Producto = require('./producto');

const archivo = new Contenedor('productos.txt');
const corona = new Producto('Cerveza Corona', 250);
const heineken = new Producto('Cerveza Heineken', 300);
const brahma = new Producto('Cerveza Brahma', 200);
const patagonia = new Producto('Cerveza Patagonia', 300);

const express = require('express');
const app = express();
const PORT = 8080;


app.listen(PORT, ()=>{
    console.log(`Server running on Port: ${PORT}`);
})

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

   app.get('/', (req, res) => {
      res.send('<h1>Bienvenido!</h1>');
   })

   console.log(archivo.productos);
   const cantidad = archivo.productos.length;
   app.get('/productos', (req, res) => {
      const arrayProductos = archivo.productos.slice(0, cantidad);
      console.log(arrayProductos);
      res.send(arrayProductos);
   })
  
   app.get('/productoRANDOM', (req, res)=>{
      const rand = Math.floor(Math.random()*cantidad);
      const random = archivo.productos[rand];
      res.send(random);
   })

   app.get('*', (req, res) => {
      res.send("Error, no es una dirección valida");
   })
}

main();



