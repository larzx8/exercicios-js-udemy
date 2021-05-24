menorEMaior = (vetor) => {
    let menor, maior
    menor = vetor[0]
    maior = vetor[0]

    for(i = 0; i < vetor.length; i++){
        if(menor>vetor[i])
        menor = vetor[i]
        else if(maior<vetor[i])
        maior = vetor[i]
    }
    console.log(`O menor valor do vetor: ${menor} e o maior: ${maior}`)
    
}


menorEMaior([9,2,3,4,5,6])