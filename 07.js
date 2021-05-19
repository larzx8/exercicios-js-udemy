function bhaskara(ax2, bx, c) {
    let delta 
    let resultado = []
    delta = (bx ** 2) - 4 * (ax2 * c)
    if(delta < 0) {
     console.log('Delta é negativo: ' + delta) 
    } else {
     resultado.push(- bx + Math.sqrt(delta) / 2 * ax2)
     resultado.push(- bx - Math.sqrt(delta) / 2 * ax2)       
      console.log(resultado)
    } 
     
    
}
bhaskara(3, -5, 12)