numeros = (vetor) => {
    let impar = 0, par = 0
    
    for(i=0; i< vetor.length; i++){
        if(vetor[i]%2==0){
            par++
        } else impar++
    
    }
    console.log(`Números impares ${impar} | Números pares ${par}`)
}

numeros([5,6,7,8,9,10,22,14,26,28])