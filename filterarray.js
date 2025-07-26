function filtrar(vetor) {
    let vetorFiltrado = [];

    for (let i = 0; i < vetor.length; i++) {
        if (maiorQue10(vetor[i])) {
            vetorFiltrado.push(vetor[i]);
        }
    }

    return vetorFiltrado;
}

function maiorQue10(n) {
    return n > 10;
}

let vetor = [0, 10, 20, 30];
console.log(filtrar(vetor)); 
