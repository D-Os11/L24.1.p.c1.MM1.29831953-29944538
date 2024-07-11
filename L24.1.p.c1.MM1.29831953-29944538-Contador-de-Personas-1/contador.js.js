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
    let count = 0;
    for (const persona of this.personas) {
      if (persona.getSexo() === "M") {
        count++;
      }
    }
    return count;
  }

  contarMujeres() {
    let count = 0;
    for (const persona of this.personas) {
      if (persona.getSexo() === "F") {
        count++;
      }
    }
    return count;
  }

  getPersonas() {
    return this.personas;
  }
}
