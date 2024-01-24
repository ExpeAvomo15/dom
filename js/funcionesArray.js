//push(elemento) -> Añade elemento al final
const frutas = ["manzana", "pera"];
frutas.push('naranja');
document.writeln(frutas);
document.write("<br>");

//pop() -> Elimina del final
const frutas1 = ['manzana', 'piña', 'plátano'];
const ultimaFruta = frutas1.pop();
document.write(frutas1);

//unshift(elemento) -> añade al principio
const frutas2 = ['fresa','manzana', 'pera'];
frutas2.unshift('fresa');
document.write("<br>")

//shift() - eliminaa del principio
const frutas3  = ['fresa','manzana', 'pera'];
const primeraFruta = frutas3.shift();
document.write("<br>")

//concat
const frutas4 = ['manzana', 'pera'];
const frutas5 = ['fresa','uva'];
const frutasConcat = frutas4.concat(frutas5);
document.write("<br>")

//slice(elemento, fin) 
const frutas6 = ['fresa','manzana', 'pera'];
const frutaSlice = frutas6.slice(1,3);
document.write(frutaSlice);
document.write("<br>");

//slice(inicio, cantidad, fin) 
const frutas7 = ['fresa','manzana', 'pera'];
const frutaSplice = frutas6.slice(1,2, 'kiki', 'mango');
document.write(frutaSlice);
document.write("<br>");


//indexOf(elemento) 
const frutas8 = ['fresa','manzana', 'pera'];
const indiceMango = frutas7.indexOf('mango');
document.write(indiceMango);
document.write("<br>");

//includes(elemento) 
const frutas9 = ['fresa','kiwi', 'mango', 'uva'];
const tieneMango = frutas9.includes('mango');
document.write(tieneMango);
document.write("<br>");








