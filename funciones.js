function hello_word() {
    console.log ("Hello Worls");
    console.log ("¿como estas?")
}
hello_word();

function agregaLista() {
    lista.push ("a");
}

var lista = ["a"];
agregaLista();
agregaLista();
agregaLista();
agregaLista();
console.log(lista);

function hola_mundo(nombre) { // nombre= parametro
    console.log ("hola " +nombre)
}

hola_mundo("Elena");
hola_mundo("juana");

function hola(nombre, apellido) {
    console.log("hola " + nombre + " " +apellido)
}

hola("elena", "de troya");

function multiplicar(num1, num2) { //num1 =4, num2=5
    var total = num1 * num2; // total= 20
    return total; //regresa el 20
}

var total_multiplicacion =multiplicar(4,5);
console.log(total_multiplicacion);