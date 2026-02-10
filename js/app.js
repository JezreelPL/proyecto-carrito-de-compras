//asingancion a variables
const carrito = document.querySelector('#carrito');
//generamos HTMl con la etiqueta  <tbody></tbody> servira para colocar los elementos nuevos
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
/*Arreglo para llenarlo  de los cursos */
let articulosCarrito = [];

cargarEventListeners();


//funciones
function cargarEventListeners(){
/*Cuando agregas un curso presionando "Agregar al carrito" */
listaCursos.addEventListener('click', agregarCurso);
}

function agregarCurso(e){
    e.preventDefault(); //prvenimos que los botones se vayan al inicio con el "#"
    const cursoSeleccionado = e.target.parentElement.parentElement;
    if(e.target.classList.contains('agregar-carrito')){
        leerDatosCurso(cursoSeleccionado);
    }    
}

//lee el contenido del HTML que le dimos clik y extrae la informacion del curso
function leerDatosCurso(curso){
//   console.log(curso);
/*Crear un objeto con el contenido del curso actual */
const infoCurso = {
imagen: curso.querySelector('img').src,
titulo: curso.querySelector('h4').textContent,
precio : curso.querySelector('.precio span').textContent,
id: curso.querySelector('a').getAttribute('data-id'),
cantidad: 1
}

/*Agregar elementos al arreglo de carrito*/
articulosCarrito =[...articulosCarrito, infoCurso];
console.log(articulosCarrito);
carritoHTML();
}

/*Muestra el carrito en el HTML */
function carritoHTML(){
    //Limpiar el HMTL 
    limpiarCurso();
    //recorre el carrito y genera el HTML

    articulosCarrito.forEach((curso) => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>
        ${curso.titulo}
        </td>
        `;
        /* Agregar el HTML del carrito en el "tbody"*/
        contenedorCarrito.appendChild(row);
    })
}

/*Eliminar el curso del tbody */
function limpiarCurso(){
    /*Esta es la forma lenta  
    contenedorCarrito.innerHTML = '';*/
    /*La mejor manera de limpiar el html es usar un while 
    su explicacion facil es que elimina el hijo siguiente de la etique como un div*/
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }

}