function triangulo(a, b, c) {
    if(a == b && b == c){
        console.log('Triangulo Equilátero')
    } else if(a == b || b == c || a == c) {
        console.log('Triangulo Isósceles')
    } else {
        console.log('Triangulo Escaleno')
    }
} 
 
triangulo(2, 2, 2)