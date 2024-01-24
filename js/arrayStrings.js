function arrayString(mi_array){
    var presentacion='';

    for (var i=0; i<mi_array.length; i++){
        presentacion+=mi_array[i]+' ';
    }

    return presentacion;

}

texto = ['hola', 'me', 'llamo', 'Expe', 'Avomo'];
document.writeln(arrayString(texto));