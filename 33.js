concatenar = (vetorInteiro, vetorString, vetorDouble) => {
    //const vetorConcat = vetorInteiro.concat(vetorString, vetorDouble)
    const vetorConcat = vetorInteiro  + vetorString + vetorDouble
    return vetorConcat
    }
    const vetorInteiro = [ 5, 70, 43, 69]
    const vetorString = [' Hello', 'World', 'Learning ']
    const vetorDouble = [ 0.10, 0.69, 2.4, 5.6]
    console.log(concatenar(vetorInteiro, vetorString, vetorDouble))
    