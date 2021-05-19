pedido = (cod, qtd) => {
    let total = 0
    
    for(i = 0; i < qtd; i++){
        switch(cod) {
            case 100: total+=3.00       
            break
    
            case 200: total+=4.00
            break
    
            case 300: total+=5.00
            break
    
            case 400: total+=7.50
            break
    
            case 500: total+=3.50
            break

            case 600: total+=2.80
            break
    
            default: 
            return 'Não temos esse pedido' 
        }        
    }
    return total
    
} 
console.log(pedido(25, 5)) 