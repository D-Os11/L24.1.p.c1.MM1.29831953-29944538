const personas = [
    { nombre: "Mary", ingreso: 150 },
    { nombre: "José", ingreso: 135 },
    { nombre: "Carlos", ingreso: 160 },
    { nombre: "Pedro", ingreso: 75 },
  ];
  
  const calcularIngresoMenor = () => {
    let ingresoMenor = personas[0].ingreso;
  
    for (const persona of personas) {
      if (persona.ingreso < ingresoMenor) {
        ingresoMenor = persona.ingreso;
      }
    }
  
    return ingresoMenor;
  };
  
  const calcularIngresoPromedio = () => {
    let totalIngresos = 0;
  
    for (const persona of personas) {
      totalIngresos += persona.ingreso;
    }
  
    const promedio = totalIngresos / personas.length;
    return promedio;
  };
  
  const mostrarResultados = () => {
    const ingresoMenor = calcularIngresoMenor();
    const ingresoPromedio = calcularIngresoPromedio();
  
    const resultados = `
      <p>Monto del ingreso menor: ${ingresoMenor}$</p>
      <p>Ingreso promedio: ${ingresoPromedio}$</p>
    `;
  
    const ingresosElement = document.getElementById("ingresos");
    ingresosElement.innerHTML = resultados;
  };
  
  mostrarResultados();
    