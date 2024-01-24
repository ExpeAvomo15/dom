/*podemos seleccionar los elementos de un documento HTML de 3 formas diferentes:
* por su ID
* por el nombre de la clase
* por su etiqueta

*/

//pOR SU ID
let elementoPorId = document.querySelector('#parrafo1');
/*Este parrafo tiene el valor párrafo 1 y le vamos a cambiar su valor por otra string usando la propiedad innerHTML*/
elementoPorId.innerHTML = 'Buenos días';

//Por el nombre de la clase(class)
let elementoPorClase = document.querySelectorAll('.parrafo');
console.log(elementoPorClase.length);
const arrayClase = [...elementoPorClase];
arrayClase[1].innerHTML = 'hola Expe';

//Por etiqueta
let elementoPorTag = document.querySelectorAll('p');
const arrayTag = [...elementoPorTag];
elementoPorTag[2].innerHTML = 'adios';

//Modificamo el contenido de las etiquetas p

elementoPorClase[1].style.background = 'red';
elementoPorClase[1].style.borderRadius = '8px';
elementoPorClase[1].style.width = '100px';
elementoPorClase[1].style.textAlign = 'center';




