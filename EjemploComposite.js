class Figura {
  dibujar() {
    throw new Error("Este metodo debe ser implementado");
  }
}

class Circulo extends Figura {
  dibujar() {
    console.log("Dibujando un circulo");
  }
}
class Cuadrado extends Figura {
  dibujar() {
    console.log("Dibujando un cuadrado");
  }
}

class GrupoFiguras extends Figura {
  constructor() {
    super();
    this.figuras = [];
  }
  agregar(figura) {
    this.figuras.push(figura);
  }
  dibujar() {
    console.log("Dibujando el grupo de figuras");
    this.figuras.forEach((f) => f.dibujar());
  }
}

//Uso 

const figura1 = new Circulo();
const figura2 = new Cuadrado();

console.log("=====================================================");

figura1.dibujar();

console.log("=====================================================");

const grupo = new GrupoFiguras();
grupo.agregar(figura1);
grupo.agregar(figura2);

grupo.dibujar();
