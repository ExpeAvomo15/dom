const parrafo4 = document.createElement('p');
const parrafo5 = document.createElement('p');
const parrafo0 = document.createElement('p');

parrafo0.innerHTML = 'Párrafo 0';
parrafo4.innerHTML = 'Párrafo 4';
parrafo5.innerHTML = 'Párrafo 5';

//seleccionamos elemento padre:
const elementoPadre = document.querySelector('.padre');

//añadimos los nodos
elementoPadre.append(parrafo4,parrafo5);

//Añadimos el nodo parrafo0 (al principio)
elementoPadre.insertBefore(parrafo0, parrafo1);

//Creamos nodo extra
const parrafoExtra = document.createElement('p');
parrafoExtra.innerHTML = 'Un párrafo más';

//Añadimos el nodo extra
elementoPadre.insertAdjacentElement('beforebegin', parrafoExtra);
//elementoPadre.insertAdjacentElement('afterbegin', parrafoExtra);
//elementoPadre.insertAdjacentElement('beforeend', parrafoExtra);
//elementoPadre.insertAdjacentElement('afterend', parrafoExtra);

//Añadir atributo alnuevo nodo extra-> le colocamos la clase párrafo
parrafoExtra.setAttribute('class', 'parrafo');
