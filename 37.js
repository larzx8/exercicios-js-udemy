progressaoArit = (a1, n, r) => {
    let valor, soma = 0
    let result = []
    valor = a1 + (n - 1) * r
    for (i = 1; i <= n; i++) {
        soma += (a1 + (i - 1) * r)
        console.log(soma)
    }
    result.push(valor)
    result.push(soma)
    return result
}

progressaoGeo = (a1, q, n) => {
    let valor, soma = 0
    let result = []
    valor = a1 * Math.pow(q, n - 1)
    for (i = 1; i <= n; i++) {
        soma += a1 * Math.pow(q, i - 1)

    }
    result.push(valor)
    result.push(soma)
    return result
}

console.log(progressaoArit(2, 4, 2))
console.log(progressaoGeo(1, 3, 4))