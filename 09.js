notaFinal = (nota) => {
    let nf = arredondamento(nota)
    if(nf<38){
        console.log("Aluno reprovado com a nota: " + nf)
    }else if(nf >= 70){
        console.log('Parabéns pelo notão! sua nota foi: ' +nf)
    } else console.log('Aluno aprovado com nota: ' +nf)
        
    }  

arredondamento = nota => {
       let nf
       if(nota%5 == 3 || nota%5 == 4){
        console.log(nota%5) //< Resto da divisão: 3
        nf = nota+ 5 -(nota%5) // 0 = 78 + 5 -(3) = 83 - 3 = 80
        return nf
    } else return nota
}
    notaFinal(78)

