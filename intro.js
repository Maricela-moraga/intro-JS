var num = 1; // almacenar datos en una variable - numero: entero o flotante(punto decimal)
var text = "Variable cadena"; // almacena cadena o string
var bool= true; // true o false

console.log(text) //imprimir en pantalla

var num1 = 1;
var num2 = 2;
var suma = num1 + num2; // + - * /
console.log(suma);

var nombre ="Elena de Troya";
var mensaje = "Mi nombre es: ";
console.log(mensaje+nombre);// + concatena dos textos

var combinamostexto = "ABC";
console.log(combinamostexto + num1);
console.log(combinamostexto+num1+num2);//el primero es texto, a la derecha se considera texto
console.log(num1+num2+combinamostexto); // todo es número
console.log(combinamostexto+(num1+num2)); // "prioridad del parentesis" si hace la suma

var orden = 10 + 20/6; //primero divide y luego suma
console.log(orden);

var orden2 = (10 + 20)/6; //primero suma y luego divide
console.log(orden2);

var nombrecompleto ="Juana";
nombrecompleto +=" De Arco";// lo que tenia antes  mas lo concatenado
console.log(nombrecompleto);

var n=13;
n +=4; // n = n + 4 , lo mismo para *,/,+
console.log(n);