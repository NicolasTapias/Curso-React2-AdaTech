
function saudacao(nomeDoEstudante, curso='Front-end em React') {
    // template string ou template literals
 return `Olá, ${nomeDoEstudante}! Seja bem-vindo(a) ao curso de ${curso}!`
    
}

const mensagemDaSaudacao = saudacao('Nicolas') //chamada da função saudacao 

console.log(mensagemDaSaudacao)

console.clear()

function somar(numero1, numero2) {
    return numero1 + numero2
}
const resultado = somar(2, 3)

console.log(resultado)
console.log(resultado / 10)