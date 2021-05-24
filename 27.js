crescimento = (alturaA, alturaB, taxaA, taxaB) => {
    if(alturaA>alturaB){
     console.log('Primeira criança é maior')
     tempo(alturaB,alturaA, taxaB,taxaA)
 } else if(alturaA<alturaB){
     console.log('A segunda criança é maior')        
     tempo(alturaA,alturaB, taxaA,taxaB)
 } else console.log('As duas crianças possuem a mesma altura')
 
}

tempo = (alturaMenor, alturaMaior, taxaA, taxaB) => {
 let ano = 0
  if(taxaA>taxaB){
     while(alturaMenor<alturaMaior){
         alturaMenor=alturaMenor* (1+taxaA)
         ano++
     }
     console.log(`A criança menor demorará ${ano} anos para ultrapassar a maior`)
  }else console.log("A criança menor não ultrapassará a maior")
  
 
}
crescimento(100,80,0.15,0.10)
