let articulosCarrito = []; //arraw vacio de los articulos que van a ir en el carrito

let listaProductos = document.querySelector('#lista-productos');

let carrito = document.querySelector('#carrito');

const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');

const contenedorCarrito = document.querySelector('#lista-carrito tbody');

document.addEventListener('DOMContentLoaded', ()=>{

    if(JSON.parse(localStorage.getItem('carrito')) == null){
        articulosCarrito = []
       
    }else {
        articulosCarrito = JSON.parse(localStorage.getItem('carrito'))
        
    }
    carritoHTML();
})

listaProductos.addEventListener('click', agregarProducto);
vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
carrito.addEventListener('click', eliminarProducto);

// ----------------  AGREGAR PRODUCTOS ---------------------

function agregarProducto(evt){
    evt.preventDefault();
    if(evt.target.classList.contains('agregar-carrito')){
        const producto = evt.target.parentElement.parentElement;
       
        leerDatosProducto(producto)
    }
}

// ---------------- ELIMINAR PRODUCTOS ---------------------

function eliminarProducto(evt){
    evt.preventDefault();
    if(evt.target.classList.contains('borrar-broducto')){
        const producto = evt.target.parentElement.parentElement;
        const productoId = producto.querySelector('a').getAttribute('data-id');
        articulosCarrito = articulosCarrito.filter(producto => producto.id !== productoId);
    }
    carritoHTML();
}
// ---------------- DATOS DEL PRODUCTO --------------------

function leerDatosProducto(item){
    const infoProducto = {
        imagen: item.querySelector('.card-img-top'),
        titulo: item.querySelector('h5').textContent,
        precio: item.querySelector('.precio').textContent,
        id: item.querySelector('a').getAttribute('data-id'),
        cantidad:1
    }
    
    if(articulosCarrito.some(item => item.id === infoProducto.id)){
        const productos = articulosCarrito.map (producto => {
            if(producto.id === infoProducto.id){
                let cantidad= parseInt(producto.cantidad);
                cantidad +=1;
                producto.cantidad = cantidad;
                return producto;
            }else{
                return producto;
            }
        })
        articulosCarrito = productos.slice();
    }else{
        articulosCarrito.push(infoProducto);
    }

    articulosCarrito.push(infoProducto);
   
    carritoHTML();
}
// ----------------- EN EL HTML -----------------------

function carritoHTML(){
    limpiarCarrito();
    articulosCarrito.forEach(producto => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
        <td>${producto.titulo}</td>
        <td>${producto.precio}</td>
        <td>${producto.cantidad}</td>
        <td>
            <a href="#" class="borrar-producto" data-id="${producto.id}"> ❌ </a>
        </td>
        `;
        contenedorCarrito.appendChild(fila);
    })
    sincronizarStorage();
}
// ---------------- GUARDAR EN LOCAL STORAGE ----------------

function sincronizarStorage(){
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}
// ----------------- LIMPIAR CARRITO -----------------------

function limpiarCarrito (){
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}

function vaciarCarrito (){
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
    articulosCarrito = [];
    sincronizarStorage();
}
//<td><img src="${producto.imagen}"  width="100"/></td>