//asingancion a variables
const carrito = document.querySelector('#carrito');
//generamos HTMl con la etiqueta  <tbody></tbody> servira para colocar los elementos
const contenedorCarrito = document.querySelector('#lista-cursos tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');


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
console.log(curso);
/*Crear un objeto con el contenido del curso actual */
const infoCurso = {
imagen: curso.querySelector('img').src,
titulo: curso.querySelector('h4').textContent,
precio : curso.querySelector('.precio span').textContent,
id: curso.querySelector('a').getAttribute('data-id'),
cantidad: 1
}
console.log(infoCurso);
}

