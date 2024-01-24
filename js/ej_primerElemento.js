/*Hacer un función que tome como parametro un array  y devuelva su primer elemento*/

function first (mi_array){
    return mi_array[0];
}

nombres = ['Expe', 'Hola', 'Gala'];
primerElm = first(nombres);
document.write("El primer elemento del array es: "+primerElm);