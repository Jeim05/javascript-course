const persona = {
    nombre: 'Jeimmy',
    edad: '23',
    correo: 'correo@correo.com',
    suscripciones : {
        web: true,
        correo: true,
    },
    coloresFavoritos : ['Negro', 'Rojo'],
    saludo : function(){
        alert('Hola!')
    },
};

// Formas de acceder a las propiedades
console.log(persona.nombre);
console.log(persona['edad']);

const variable = 'correo';
console.log(persona[variable]);


// Para agregar nuevos valores
persona.pais = 'Mexico';
console.log(persona);

// A las funciones dentro de un objeto se le llaman Metodos

// Forma de acceder a la función
persona.saludo();