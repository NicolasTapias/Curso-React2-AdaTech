//loop com contador
const prompt = require('readline-sync')

let contador = 0

while (contador < 5){
    console.log(contador)
    contador++
    if (contador === 2){
        break
    }
    console.log('Depois do if...')
}