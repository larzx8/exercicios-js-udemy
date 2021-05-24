numerosIntervalo = (vetor) => {
    let intervalo = 0
    for(i = 0; i < vetor.length; i++){
        if(vetor[i]>=10 && vetor[i]<=20){
            intervalo++   
        } 
    } console.log(`Números dentro do intervalo de 10 a 20: ${intervalo} | Números fora do intervalo ${vetor.length - intervalo}`)
}



numerosIntervalo([1,5,7,10,15,19,20,25,30,45,50,100])