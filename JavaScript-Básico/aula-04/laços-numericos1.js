const prompt = require('readline-sync')
let i

// expressão 1: Inicialização da variável de controle
// expressão 2: Condição que define quando irá ocorrer a parada do for
// expressão 3: o incremento da variável de controle
// for (expressão 1; expressão 2; expressão 3){
// O escopo do for
//}

for (i = 0; i < 5; i++){
    console.log(i)
}
console.clear()

let maiorNumero = 0
let numeroInformado

for (let i = 1; i <= 5; i++){
    numeroInformado = Number(prompt.question('Informe um numero positivo: '))

    if (numeroInformado > maiorNumero){
        maiorNumero = numeroInformado
    }
}

console.log('Maior numero: ', maiorNumero)
 