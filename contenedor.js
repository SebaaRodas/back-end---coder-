const fs = require('fs');

class Contenedor{
    constructor(nombre){
        this.nombre = nombre;
        this.productos = []; 
    }
    // recibe un producto, guarda el archivo y agrega el id que le asigna (no puede ser repetido)
    async save(producto){
        try {   
            this.productos.push({...producto, id : this.productos.length + 1})
            await fs.promises.writeFile('productos.txt', JSON.stringify(this.productos, null, 2));
            
        } catch (error) {
            console.log('No se pudo guardar el producto');
        }
    }
    // recibe el id y muestra el producto en caso de que exista, o null si no existe
    getById(id){
        const elemento = this.productos.find(x => x.id === id);
        if(elemento == null){
            console.log('No existe el producto con ese id');
        } else {
            console.log(elemento);
        }
    }
    // devuelve un array con los productos presentes en el archivo
    getAll(){
        console.log(this.productos);
    }
    // recibis el id y eliminas el producto
    async deleteById(id){
        try {   
            const borrar = this.productos.splice(id-1, 1);
            await fs.promises.writeFile('productos.txt', JSON.stringify(this.productos, null, 2));
            console.log('Se elimino correctamente el producto con el id:', id);
        } catch (error) {
            console.log('No se pudo borrar el producto');
        }
    }
    // eliminar todos los productos
    deleteAll(){
        fs.unlink('productos.txt', error => {
            if (error){
                console.log("Hubo un problema al borrar el archivo")
            } else {
                console.log("Archivo borrado correctamente");
            }
        }) 
    }
}

module.exports = Contenedor;
 