function sumaPares(mi_array){
    var suma = 0;
    for(var i=0; i<mi_array.length; i++){
        if(mi_array[i]%2==0){
            suma += mi_array[i];
        }
    }

    return suma;
}

numeros = [0, 1, 2, 3, 4, 5];

document.write(sumaPares(numeros));