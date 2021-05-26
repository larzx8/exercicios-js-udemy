imprimirImpar = (inicio = 0, fim = 100) => {
    let impares = []
    let aux
    if (inicio > fim) {
        aux = inicio 
        inicio = fim 
        fim = aux
    }

    for (i = inicio; i < fim; i++) {
        if (i % 2 == 1) {
            impares.push(i)
        }
    } return impares
}
console.log(imprimirImpar(45,1))