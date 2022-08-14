console.log("Entro al main.js");

// var nombre = "Juan";
// console.log (nombre);
// var nombre = "manuel";
// console.log (nombre);
// con var puedo tener dos variables con el mismo nombre, eso esta mal. con let no pasa, sale error
 // String Template

 let nombre = "juan"
 let apellido = "perez"
 console.log(nombre + " " + apellido) // forma tracidional

 console.log(`Mi nombre es: ${nombre}, mi apellido es: ${apellido}`) // String template debe ser con estas comillas ``
 
 // objetos en JavaScript.

 let animal = {
    "nombre": "Willy",
    "color": "Negro",
    "Raza": "Labrador",
    "edad": 4,
    "peso": 8,
 } // se podria hacer sin comillas en nombre color etc
 console.log(animal) //imprime toda la info 
 console.log ("el nombre es:", animal.nombre);
 console.log ("el color es:", animal.color);

 let keys = Object.keys(animal);

 keys.forEach (llave => {
    console.log (animal[llave]);
 });

 let perro2 = {
    "nombre": "mario",
    "color": "blanco",
    "Raza": "Labrador",
    "edad": 4,
    "peso": 8,
 } 
 let {nombre:nombreperro, color, Raza, edad} = perro2; // revisar 

 const json_colores = `
{
    "arrayColores":[{
            "nombreColor":"rojo",
            "valorHexadec":"#f00"
        },
        {
            "nombreColor":"verde",
            "valorHexadec":"#0f0"
        },
        {
            "nombreColor":"azul",
            "valorHexadec":"#00f"
        },
        {
            "nombreColor":"cyan",
            "valorHexadec":"#0ff"
        },
        {
            "nombreColor":"magenta",
            "valorHexadec":"#f0f"
        },
        {
            "nombreColor":"amarillo",
            "valorHexadec":"#ff0"
        },
        {
            "nombreColor":"negro",
            "valorHexadec":"#000"
        }
    ]
}
`;
const objeto_de_js = JSON.parse(json_colores);
console.log (json_colores); //esto es el JSON puro
console.log (objeto_de_js); //JSON transformado en objeto

objeto_de_js.arrayColores.forEach(item => {
    console.log(item.nombreColor);
})
