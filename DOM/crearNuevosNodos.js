//Crear nuevos nodos

//1. Creamos el Nodo
const parrafo4 = document.createElement('p');
//Añadimos contenido al párrafo
const textParrafo4 = document.createTextNode('párrafo 4');
//Seleccionamos el nodo padre
const elementoPadre = document.querySelector('.padre');
//añadimos el nodo
elementoPadre.appendChild(parrafo4);
//Añadimos el texto a su nodo padre (el parrafo 4), tenemos dos formas:
parrafo4.appendChild(textParrafo4);
parrafo4.innerHTML = '<h1>parrafo 4</h1>'; //Esto debería estar comentado

//Añadir elementos con append, puede añadir varios nodos
const parrafo5 = document.createElement('p');
const parrafo6 = document.createElement('p');
elementoPadre.append(parrafo5,parrafo6);
parrafo5.innerHTML = 'Párrafo 5';
parrafo6.innerHTML = 'Párrafo 6';