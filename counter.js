function criaContador(n) {
  return function() {
    return n++;
  }
}

const contador = criaContador(10)
console.log(contador())
console.log(contador())
console.log(contador())
