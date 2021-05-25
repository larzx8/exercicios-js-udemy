adicionar = (vetorPilha, vetorAdiciona) => {
    /**for(i = 0; i < vetorAdiciona.length; i++){
        vetorPilha.push(vetorAdiciona[i])
    }*/
    vetorPilha.push(...vetorAdiciona)
     return vetorPilha
  }
  
  const vetorPilha = [1, 2, 3, 4, 5]
  const vetorAdiciona = [6, 7, 8, 9, 10]
  console.log(adicionar(vetorPilha, vetorAdiciona))
  