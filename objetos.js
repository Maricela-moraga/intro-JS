var estudiante1 = {
    nombre: "elena",
    apellido: "de troya",
    id: 1234,
    cursos:["fundamentos de la web", "python"],
    graduado: false
}

var auto1 ={
    marca:"Nissan",
    modelo: "versa",
    color: "blanco",
    placa: "ABC1234"
}

console.log(auto1.modelo);
console.log(estudiante1.cursos);

auto1.modelo = "todo terreno";
console.log (auto1.modelo);

auto1.año = 1999;
console.log (auto1.año);



var listaEstudiantes = [
    {nombre: "Elena", apellido: "De Troya", id: 1234},
    {nombre: "Juana", apellido: "De Arc", id: 2345},
    {nombre: "Pablo", apellido: "Picasso", id: 3456}
];

//Cómo modificaríamos el apellido de Juana?

listaEstudiantes[1].apellido = "De Arco"
console.log(listaEstudiantes[1])