//seleccionar el nodo
/*let nodoP = document.querySelector('#parrafo1');
nodoP.innerHTML='He cambiado el contenido del parrafo';

let nodoC = document.querySelectorAll('.parrafo');

const arrayClase = [...nodoC];

arrayClase[1].innerHTML = 'Cambiando el contenido del parrafo dos'

let nodoT = document.querySelectorAll('p');
const arrayTag = [...nodoT];
arrayTag[2].innerHTML = 'Cambiando el el parrafo 3';*/

let nodoId = document.getElementById('parrafo1');
nodoId.innerHTML = 'Cambiando el parrafo 1 con getElementById';

let nodoClase = document.getElementsByClassName('parrafo')
nodoClase[1].innerHTML = 'Cambiando el parrafo 2 con getByClassName';

let nodoTag = document.getElementsByTagName('p');
nodoTag[2].innerHTML = 'Cambiando el parrafo 3 con getByTagName'

/** CREAR NODOS */
let nodoNuevo = document.createElement('p');
let nodoNuevoText = document.createTextNode('Párrafo 4: Este es un nodo nuevo');

let nodoPadre = document.querySelector('.padre');
nodoPadre.appendChild(nodoNuevo);

//nodoNuevo.innerHTML = 'Un nodo más';

//append
let nodo4 = document.createElement('p');
let nodo5 = document.createElement('p');
let nodo6 = document.createElement('p');
let nodo7 = document.createElement('p');
nodo4.innerHTML='nodo4';
nodo5.innerHTML = 'nodo5';
nodo6.innerHTML = 'nodo6';
nodo7.innerHTML= 'nodo7';
nodoPadre.append(nodo4,nodo5);
nodoPadre.append(nodo6, nodo7);

/**INSERT BEFORE */
let nodo8 = document.createElement('p');
nodo8.innerHTML = 'nodo8';
nodoPadre.insertBefore(nodo8, nodoNuevo);

//Añadimos el nodo extra
let nodoExtra = document.createElement('p');
nodoExtra.innerHTML = 'Nodo extra';
nodoPadre.insertAdjacentElement('afterbeguin', nodoExtra);


const parrafo3 = document.querySelector('#parrafo3');
const parrafo5 = document.querySelector('#parrafo5');
parrafo5.innerHTML = 'Nuevo Párrafo';
//reemplazamos el nodo3 por el párrafo5
nodoPadre.replaceChild(parrafo5, parrafo3);

//Remove
//removeChild
const parrafo1 = document.querySelector('#parrafo1');
//eliminamos
nodoPadre.removeChild(parrafo1);
//remove
const parrafo2 = document.querySelector('#parrafo2');
parrafo2.remove();

//replaceChild -> Padre
const parrafo5 = document.createElement('p');
parrafo5.innerHTML = 'parrafo 5';
const parrafo6 = document.querySelector('#parrafo6');

//reemplazamos
nodoPadre.replaceChild(parrafo6, parrafo5);

