calculadora = (x, y, op) => {
    switch(op) {
        case '+': console.log(x + y) 
        break

        case '-': console.log(x - y)
        break

        case '*': console.log(x * y)
        break

        case '/': console.log(x / y)
        break
    }
} 

calculadora(5, 4, '/')