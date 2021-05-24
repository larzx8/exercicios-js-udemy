mediaArit = (vetor) => {
    let aux = 0
    for(i = 0; i < vetor.length; i++){
        aux += vetor[i]
    } aux = aux / vetor.length
    return aux
}

console.log(`A media aritmetica é ${mediaArit([3, 40, 65, 12, 59, 32, 69])}`)