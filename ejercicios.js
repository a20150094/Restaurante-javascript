alert("Bienvenidos al restaurante. Su cuenta es ...");
//Ingresar Datos
var entrada = parseInt(prompt("Ingrese el costo de la entrada"));
var segundo = parseInt(prompt("Ingrese el segundo costo"));
var postre = parseInt(prompt("Ingrese el costo del postre"));
//Procesar Datos
var total = entrada + segundo + postre;
var IGV = total + (total*0.18);

alert("Presione la tecla F12 para mostrar los resultados")
//Mostrar Datos
console.log("El costo de la entrada es: " + entrada);
console.log("El costo del segundo es: " + segundo) ;
console.log("El costo del segundo es: " + postre);
console.log("El costo total es: " + total) ;
console.log("El costo total con IGV es: " + IGV) 

