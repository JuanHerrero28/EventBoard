const modalContenedor = document.querySelector('.modal-contenedor');
const abrirCarrito = document.getElementById('cesta-carrito');
const cerrarCarrito = document.getElementById('btn-cerrar-carrito');
const modalCarrito = document.querySelector('.modal-carrito')

abrirCarrito.addEventListener('click', () =>{
    modalContenedor.classList.toggle('modal-active');
})

cerrarCarrito.addEventListener('click', () =>{
    modalContenedor.classList.toggle('modal-active');
})

modalContenedor.addEventListener('click', () =>{
    cerrarCarrito.click();
})

/////// e.stopPropagation() : detiene la propagación del evento en punto determinado en este caso el (modal-carrito/////

modalCarrito.addEventListener('click', (e) => {
    e.stopPropagation();
})