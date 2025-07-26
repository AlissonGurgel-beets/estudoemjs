function transformaVetor(vetor, fn) {
    let novoVetor = [];

    for (let i = 0; i < vetor.length; i++) {
        novoVetor[i] = fn(vetor[i], i); 
    }

    return novoVetor; 
}

function adiciona1(n) {
    return n + 1; 
}

function adicionaI(n, i) {
    return n + i;
}

function trocaPara42(n, i) {
    return 42;
}

let vetor = [0, 1, 2, 3, 4];

console.log(transformaVetor(vetor, adiciona1));   
console.log(transformaVetor(vetor, adicionaI));   
console.log(transformaVetor(vetor, trocaPara42)); 
