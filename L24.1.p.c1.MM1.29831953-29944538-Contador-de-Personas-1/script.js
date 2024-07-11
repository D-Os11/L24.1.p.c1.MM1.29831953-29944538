class Persona {
  constructor(nombre, sexo) {
    this.nombre = nombre;
    this.sexo = sexo;
  }

  getNombre() {
    return this.nombre;
  }

  getSexo() {
    return this.sexo;
  }
}

class ContadorPersonas {
  constructor() {
    this.personas = [];
  }

  agregarPersona(persona) {
    this.personas.push(persona);
  }

  contarTotalPersonas() {
    return this.personas.length;
  }

  contarHombres() {
    return this.personas.filter(persona => persona.getSexo() === "M").length;
  }

  contarMujeres() {
    return this.personas.filter(persona => persona.getSexo() === "F").length;
  }

  getPersonas() {
    return this.personas;
  }
}

const personas = [
  new Persona("Luis", "M"),
  new Persona("Ana", "F"),
  new Persona("José", "M"),
  new Persona("Carmen", "F"),
  new Persona("Rosa", "F"),
  new Persona("José", "M"),
  new Persona("María", "F"),
  new Persona("Luz", "F"),
  new Persona("Rafael", "M"),
  new Persona("Liz", "F"),
  new Persona("Marcos", "M"),
  new Persona("Leo", "M"),
];

const contadorPersonas = new ContadorPersonas();

for (const persona of personas) {
  contadorPersonas.agregarPersona(persona);
}

const totalPersonas = contadorPersonas.contarTotalPersonas();
const hombres = contadorPersonas.contarHombres();
const mujeres = contadorPersonas.contarMujeres();

console.log(`Cantidad de personas: ${totalPersonas}`);
console.log(`Cantidad de hombres: ${hombres}`);
console.log(`Cantidad de mujeres: ${mujeres}`);

// Opcional: Imprimir la lista de personas en la consola
const personasLista = contadorPersonas.getPersonas();
console.log("\nLista de personas:");
for (const persona of personasLista) {
  console.log(`Nombre: ${persona.getNombre()}, Sexo: ${persona.getSexo()}`);
}