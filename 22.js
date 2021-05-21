jurosComposto = (val, mes) => {
    let result
    mes -=1
    console.log(mes)
    result = val * (1 + 0.05) ** mes
    return result
}

console.log(jurosComposto(250, 5).toFixed(2))