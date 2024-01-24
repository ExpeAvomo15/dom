function sumaArray(mi_array){
    var suma = 0;
    for (var i=0; i<mi_array.length; i++){
        suma += mi_array[i];
    }
    return suma;
}

numbers = [1, 2, 3, 4, 5];


document.write("La suma de todos los elemnetos es: "+sumaArray(numbers));