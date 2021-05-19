troco = (valor) =>{
    let nota1, nota5, nota10, nota50, nota100

    if(valor >=100){ //369 >= 100
        nota100 = parseInt(valor/100) // 3
        valor = valor - (nota100 * 100) // 369 - 300 = 69
        console.log("Notas de R$100: " +nota100)
    }
    if(valor >=50){
        nota50 = parseInt(valor/50)
        valor -= nota50 * 50
        console.log("Notas de R$50: " +nota50)
    }
    if(valor >= 10){
        nota10 = parseInt(valor/10)
        valor -= nota10 * 10
        console.log("Notas de R$10: " +nota10)
    }
    if(valor >= 5){
        nota5 = parseInt(valor/5)
        valor -= nota5 * 5
        console.log("Notas de R$5: " +nota5)
    } 
    if(valor >= 1){
        nota1 = parseInt(valor/1)
        valor -= nota1 * 1
        console.log("Notas de R$1 : " +nota1)
    }

} 
troco(369)