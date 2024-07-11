class Empleado {
    constructor(nombre, sexo) {
      this.nombre = nombre;
      this.sexo = sexo;
    }
  }
  
  class Empresa {
    constructor() {
      this.empleados = [];
    }
  
    agregarEmpleado(empleado) {
      this.empleados.push(empleado);
    }
  
    calcularCantidadHombres() {
      return this.empleados.filter(empleado => empleado.sexo === 'M').length;
    }
  
    calcularPorcentajeMujeres() {
      const totalEmpleados = this.empleados.length;
      const cantidadMujeres = this.empleados.filter(empleado => empleado.sexo === 'F').length;
      return (cantidadMujeres / totalEmpleados) * 100;
    }
  }
  
  const empresa = new Empresa();
  
  // Función para agregar un empleado (no la uses ahora)
  function agregarEmpleado() {
    const nombre = document.getElementById('nombre').value;
    const sexo = document.getElementById('sexo').value;
  
    const empleado = new Empleado(nombre, sexo);
    empresa.agregarEmpleado(empleado);
  
    actualizarResultados();
  }
  
  // Función para actualizar los resultados (no la uses ahora)
  function actualizarResultados() {
    const cantidadHombres = empresa.calcularCantidadHombres();
    const porcentajeMujeres = empresa.calcularPorcentajeMujeres();
  
    document.getElementById('cantidadHombres').textContent = cantidadHombres;
    document.getElementById('porcentajeMujeres').textContent = porcentajeMujeres.toFixed(2);
  }
  
  // **Agrega empleados de prueba:**
  const empleado1 = new Empleado('Juan Pérez', 'M');
  const empleado2 = new Empleado('María García', 'F');
  const empleado3 = new Empleado('Pedro López', 'M');
  const empleado4 = new Empleado('Ana Martínez', 'F');
  
  // **Agrega los empleados de prueba a la empresa:**
  empresa.agregarEmpleado(empleado1);
  empresa.agregarEmpleado(empleado2);
  empresa.agregarEmpleado(empleado3);
  empresa.agregarEmpleado(empleado4);
  
  // **Llama a la función para actualizar los resultados:**
  actualizarResultados();
    