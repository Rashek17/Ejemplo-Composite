// Clase base
class Figura {
  dibujar() {
    throw new Error("Este método debe ser implementado");
  }
}

// Figuras simples (Hojas)
class Circulo extends Figura {
  dibujar() {
    console.log("Dibujando un 🔵 Círculo");
  }
}

class Cuadrado extends Figura {
  dibujar() {
    console.log("Dibujando un ⬜ Cuadrado");
  }
}

// Grupo de figuras (Composite)
class GrupoFiguras extends Figura {
  constructor() {
    super();
    this.figuras = [];
  }

  agregar(figura) {
    this.figuras.push(figura);
  }

  dibujar() {
    console.log("Dibujando un grupo:");
    this.figuras.forEach(f => f.dibujar());
  }
}

// Uso
const figura1 = new Circulo();
const figura2 = new Cuadrado();

const grupo = new GrupoFiguras();
grupo.agregar(figura1);
grupo.agregar(figura2);

// Puedes dibujar una figura o un grupo igual
figura1.dibujar();
console.log("-------------------------------------");
grupo.dibujar();
