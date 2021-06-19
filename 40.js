conceitoNotas = (vetorDeNotas) => {
    let conceito = []
        for(i = 0; i < vetorDeNotas.length; i++){
            if(vetorDeNotas[i]>=0 && vetorDeNotas[i]<= 4.9){
                conceito.push('Conceito D')
            } else if(vetorDeNotas[i]>=5.0 && vetorDeNotas[i]<= 6.9){
                conceito.push('Conceito C')
            } else if(vetorDeNotas[i]>=7.0 && vetorDeNotas[i]<= 8.9){
                conceito.push('Conceito B')
            } else conceito.push('Conceito A')
        } return conceito
    }
    console.log(conceitoNotas([5,3.7, 9.8, 5.7, 8.2]))