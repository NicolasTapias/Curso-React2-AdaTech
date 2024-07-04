const prompt = require('readline-sync')
const numeroAleatorio = parseInt (Math.random() * 10)

let numeroDoUsuario = Number(prompt.question('Informe um numero entre 0 e 10: '))

console.log(numeroAleatorio)

while (numeroAleatorio !== numeroDoUsuario){9
    console.log('Voce errou o numero! Tente novamente...')
    numeroDoUsuario = Number(prompt.question('Informe um numero entre 0 e 10: '))
}

console.log('Parabens! Voce acertou! o numero era', numeroAleatorio)




 