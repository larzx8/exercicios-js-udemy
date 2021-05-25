multiplicaVetor = (vetor, inteiro) => {
    let vetorResultado = []
    for(i = 0; i < vetor.length ; i++) {
        vetorResultado.push(vetor[i] * inteiro)
    } if (inteiro > 5) {
        vetorResultado = multiplicaSegundoVetor(vetorResultado, inteiro)
    }
    return vetorResultado
    }
    
    multiplicaSegundoVetor = (vetor, inteiro) => {
        let vetorResultado = []
    for(i = 0; i < vetor.length ; i++) {
        vetorResultado.push(vetor[i] * inteiro)
    }
    return vetorResultado
    } 
    
    console.log(multiplicaVetor([1,5,12,15.5], 6))
    