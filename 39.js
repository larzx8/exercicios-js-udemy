inverterVetor = (vetorA, vetorB) => {
    
    if(vetorA.length == vetorB.length){
    for(let i = 0; i < vetorA.length; i++){
        vetorA[i] = vetorB[i] + vetorA[i]
        vetorB[i] = vetorA[i] - vetorB[i]
        vetorA[i] = vetorA[i] - vetorB[i]
        } 
    console.log(vetorA, vetorB)
    } else console.log('Vetores de tamanhos diferentes')

}
inverterVetor([5, 10, 7, 6], [11, 26, 70, 69])