comparar = (stringA, stringB) => {
    let igual = true
    for(i=0; i < stringA.length; i++){
        caractere1 = stringA[i].toUpperCase()
            for(j=0; j<stringB.length; j++){
                caractere2 = stringB[j].toUpperCase()
                if(caractere1 == caractere2){
                igual = true
                break
                }else igual = false
            }
        if(!igual)
            return igual

    }
    return igual
}
console.log(comparar("Kingdom","kingdom hearts"))