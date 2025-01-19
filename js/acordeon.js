// Javascript para que funcione el acordeon

const bloques    = document.querySelectorAll('.Acordeon-bloque')    

// Optimización: Función handle para manejar el click de cualquier h2
const handleClick = (bloque) => {
    //quita la clase active de todos los bloques
    bloques.forEach((bloque) => bloque.classList.remove('isActive'));
    //agrega la clase active al bloque activo
    bloque.classList.add('isActive');
}

// Recorremos todos los bloques y asignamos el listener de click
bloques.forEach(( bloque) => {
    //Optimizacion: seleccionamos con bloque.querySelector
    const h2     = bloque.querySelector ('.Acordeon-titulo')

    // Asignamos un click a cada h2
    h2.addEventListener('click', ()=> handleClick(bloque));

    });