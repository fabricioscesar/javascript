var agora = new Date()
var diaSem = agora.getDay()
//domingo a sabado de 0 a 6
switch(diaSem){
    case 0:
        console.log(`domingo`)
        break
    case 1:
        console.log(`segunda`)
        break
    case 2:
        console.log(`terça`)
        break
    case 3:
        console.log(`quarta`)
        break
    case 4:
        console.log(`quinta`)
        break
    case 5:
        console.log(`sexta`)
        break
    case 6:
        console.log(`sábado`)
        break
    default:
    	console.log(`[ERRO!] Dia Inválido.`)
        break
}