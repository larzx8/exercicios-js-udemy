calcularMedia = (cod, notaA, notaB, notaC) => {
    let notaFinal
    notaFinal = notaA*3 + notaB*3 + notaC*4/ (3+3+4)
    if(notaFinal/10>5){
        console.log(`COD:${cod} | Nota 1: ${notaA} | Nota 2: ${notaB} | Nota 3: ${notaC} | Média Final: ${notaFinal/10} | Situação: APROVADO`)
    }else
        console.log(`COD:${cod} | Nota 1: ${notaA} | Nota 2: ${notaB} | Nota 3: ${notaC} | Média Final: ${notaFinal/10} | Situação: REPROVADO`)


}
//ver ternário e sort
calcularMedia(1,5,5,4)