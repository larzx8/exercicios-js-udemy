
function formatarDinheiro(valor) {
    valor = 0.1 + 0.2
    return console.log(valor.toFixed(2))
    
} 

formatarDinheiro()

const formatardinheiro1 = (reais) => { reais = `R$ ${reais.toFixed(2).toString().replace('.', ',')}`
 console.log(reais)
}
    
formatardinheiro1(0.1 + 0.2)


  






