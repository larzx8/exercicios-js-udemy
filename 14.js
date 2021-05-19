frutas = (fruta) => {
    switch(fruta){
        case 'Maçã' : 
        case 'maçã' : console.log('Não vendemos essa fruta.')
        break

        case 'Kiwi' :
        case 'kiwi' : console.log('Estamos com escassez de kiwis.')
        break

        case 'Melancia' :
        case 'melancia' : console.log('São 3 reais o quilo.')
        break

        default : console.log('Por favor, digite novamente o nome da fruta.')
    }
}  
frutas('maçã')