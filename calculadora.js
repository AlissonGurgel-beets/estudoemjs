class Calculadora {
  constructor(valorInicial) {
    this.resultado = valorInicial;
  }

  somar(valor) {
    this.resultado += valor;
    return this;
  }

  subtrair(valor) {
    this.resultado -= valor;
    return this;
  }

  multiplicar(valor) {
    this.resultado *= valor;
    return this;
  }

  dividir(valor) {
    if (valor === 0) {
      throw new Error("Divisão por zero não é permitida");
    }
    this.resultado /= valor;
    return this;
  }

  elevar(potencia) {
    this.resultado = Math.pow(this.resultado, potencia);
    return this;
  }

  obterResultado() {
    return this.resultado;
  }
}

console.log(new Calculadora(10).somar(5).subtrair(7).obterResultado()); 

console.log(new Calculadora(2).multiplicar(5).elevar(2).obterResultado()); 
