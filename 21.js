conveniados = (idade) =>{
    let adicional = 100
    if (idade <= 9) {
        console.log("Crianças com menos de 10 anos pagam R$ " +(80+adicional))
       
    }
    else if (idade <= 30) {
        console.log("Jovens entre 10 a 30 anos pagam R$ " +(50+adicional))
    }
    else if (idade <= 60) {
        console.log("Adultos entre 30 e 60 anos pagam R$ "+(95+adicional))
    } 
    else 
    console.log("Idosos acima de 60 anos pagam R$ "+(130+adicional))

}

conveniados(80)
