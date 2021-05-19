fatorial = (x) => {
    let aux = x
    for(let i = 1; i < x ; i++) {
        aux = i * aux        
    } console.log(aux)
}

fatorial(5)