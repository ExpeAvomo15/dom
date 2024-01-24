var ultimo;
function last(mi_array){
   pos = mi_array.length-1;
    return mi_array[pos];
}

nombres = ['Expe', 'Hola', 'Laura'];
ultElm = last(nombres);
document.write("El ultimo elemento del array es: "+ultElm);