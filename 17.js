aumento = (cargo, salario) => {
    switch(cargo) {
        case 'A': console.log(salario * 1.10)
        break
        
        case 'B': console.log(salario * 1.15)
        break

        case 'C': console.log(salario * 1.20)
        break

        default : console.log('Plano Inválido')
    } 

} 

aumento('D', 1000)