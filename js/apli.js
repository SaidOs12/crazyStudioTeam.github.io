
const itemsAcordeon =document.querySelectorAll('.acordeon-item');

itemsAcordeon.forEach(item =>{
    const titulo = item.querySelector('.acordeon-titulo');
    const contenido = item.querySelector('.acordeon-contenido');
    const icono = item.querySelector('ion-icon');
    titulo.addEventListener('click',()=>{
        contenido.classList.toggle('show');
        icono.classList.toggle('rotate');   
    })
})