const prompt = require('readline-sync')
const idade = Number(prompt.question('Qual eh a sua idade?'))
const ehMaiorDeIdade = idade >= 18

if(ehMaiorDeIdade){
    console.log('Voce eh maior de idade!')
} else {
    console.log('Voce eh menor de idade!')
}

const mediaDoAluno = 4
if (mediaDoAluno >= 7){
    console.log('Aprovado!')
} else if (mediaDoAluno < 7 && mediaDoAluno >= 5){ 
    console.log('Prova Final')
} else {
    console.log('Reprovado')
}

const idadeDaPessoa = 18
const temCNH = true

if (idadeDaPessoa >= 18 && temCNH){
    console.log('Voce pode dirigir!')
} else {
    console.log('voce NÃO pode dirigir!')
}