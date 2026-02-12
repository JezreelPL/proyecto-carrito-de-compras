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
//eliminar cursos del carrito
carrito.addEventListener('click', eliminarCursos);
//vaciar el carrito
vaciarCarritoBtn.addEventListener('click',() =>{
    articulosCarrito = [] //receteamos el arreglo
    limpiarCurso(); //eliminar todo el HTML 
})
}

function agregarCurso(e){
    e.preventDefault(); //prvenimos que los botones se vayan al inicio con el "#"
    const cursoSeleccionado = e.target.parentElement.parentElement;
    if(e.target.classList.contains('agregar-carrito')){
        leerDatosCurso(cursoSeleccionado);
    }    
}

//Eliminar cursos
function eliminarCursos(e){
    if(e.target.classList.contains('borrar-curso')){
        const cursoID = e.target.getAttribute('data-id');
        //eliminar del arrego de articulosCarrito por data-id
    articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoID);
    carritoHTML();//iterar sobre el carrito y mostrar lo que tienen
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


/*Revisa si un elemento ya existe en el carrito */
const existe = articulosCarrito.some( curso => curso.id === infoCurso.id);  
    if(existe){
        //Actulizamos la cantidad de curso agregados
        const cursos = articulosCarrito.map(curso => {
          if(curso.id === infoCurso.id){
            curso.cantidad++;
            return curso; // retorna los cursos actualizados si son mas que 1
          }else{
            return curso; //retorna los cursos normales que solo se eligio 1
          }
            

        });
        articulosCarrito=[...cursos];
    }else{
        /*Agregar elementos al arreglo de carrito*/
        articulosCarrito =[...articulosCarrito, infoCurso];
    }

console.log(articulosCarrito);
carritoHTML();
}

/*Muestra el carrito en el HTML */
function carritoHTML(){
    //Limpiar el HMTL 
    limpiarCurso();
    


    //recorre el carrito y genera el HTML
    //los <td> o tablas van conforme como los definimos en el HTML es como los agregamos aca 
    articulosCarrito.forEach((curso) => {
        //console.log(curso);
        const {imagen,titulo,precio,cantidad,id} = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
        <td><img src="${imagen} "width="100"</td>
        <td>${titulo}</td>
        <td>${precio}</td>
        <td>${cantidad}</td>
        <td> 
        <a href="#" class="borrar-curso" data-id="${id}"> X </a>
        </td>
        `;
        /* Agregar el HTML del carrito en el "tbody"*/
        contenedorCarrito.appendChild(row);
    })
}

/*Eliminar el curso del tbody */
function limpiarCurso(){
    /*Esta es la forma lenta  
    contenedorCarrito.innerHTML = '';   */
    /*La mejor manera de limpiar el html es usar un while 
    su explicacion facil es que elimina el hijo siguiente de la etique como un div*/
    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }

}