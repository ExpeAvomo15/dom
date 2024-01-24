//Creamos clase
function Persona(nombre){
    this.nombre = nombre || Persona.prototype.nombre;
    window.alert("Se ha creado un nuevo objeto");
}

//definimos propiedades y las funciones
Persona.prototype.Persona = "nombre por defecto";
Persona.prototype.saludaPersona = function(){
    window.alert("Hola persona");
}

var persona1 = new Persona('Expe');
persona1.saludaPersona();

//document.write(persona1.nombre);

function Alumno (nombre){
    this.nombre=nombre || Alumno.prototype.nombre;
    window.alert("Se ha creado un nuevo objeto Alumno")
}

Alumno.prototype.nombre = "Maria";

//Herencia
Alumno.prototype = Object.create(Persona.prototype);
//Apuntar al constructor de alumno
Alumno.prototype.constructor = Alumno;
//creamos un objeto de la clase alumno
var alumno1 = new Alumno("Expe");
//LLammamos a la funcion de la clase persona con el objeto alumno
alumno1.saludaPersona();