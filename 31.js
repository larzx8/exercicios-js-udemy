qtdNegativos = (vetor) => {
    let negativos = 0
    let valores = []
    for(i = 0; i < vetor.length; i++){
        if(vetor[i] < 0) {
            negativos++
            valores.push(vetor[i])
            
        }
    } console.log(`Numeros negativos: ${negativos} | Sendo eles: ${valores}`)
}

qtdNegativos([3,-10,-8,2,-50,1,21,-69])