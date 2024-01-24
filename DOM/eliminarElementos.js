const elementoPadre = document.querySelector('.padre')
//removeChild -> del padre
const parrafo1 = document.querySelector('#parrafo1');
elementoPadre.removeChild(parrafo1);

//remove
const parrafo2 = document.querySelector('#parrafo2');
parrafo2.remove();

//replaceChild -> Padre
const parrafo5 = document.createElement('p');
parrafo5.innerHTML = 'El parrafo 5 ha reemplazado al 3';
const parrafo3 = document.querySelector('#parrafo3');

//reemplazamos del padre
elementoPadre.replaceChild(parrafo5, parrafo3);

let nodoNuevo = document.createElement('p');
nodoNuevo.innerHTML = 'Este es un nodo nuevo';
elementoPadre.appendChild(nodoNuevo);

elementoPadre.replaceChild(nodoNuevo, parrafo5);
nodoNuevo.remove();


