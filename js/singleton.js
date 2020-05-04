const alumnos = {
    //  todos los alumnos 
    listaAlumnos : [],

    // obtener un alumno
    get: function(id){
        return this.listaAlumnos[id];
    },
    // crear un alumno
    crear: function(datos){
        this.listaAlumnos.push(datos);
        
    },
    // Listar todos los alumnos
    listado: function(){
        return this.listaAlumnos
    }

}

const infoAlumno = {
    nombre:"fabian",
    edad: 27
}
const  infoAlumno2 ={
    nombre:"Pablo",
    edad: 30
}

alumnos.crear(infoAlumno);

alumnos.crear(infoAlumno2);

const listado = alumnos.listado();

const alumno = alumnos.get(1)
console.log(alumno)
console.log(listado)
