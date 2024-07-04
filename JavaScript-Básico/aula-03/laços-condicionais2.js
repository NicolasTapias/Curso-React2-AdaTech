const prompt = require('readline-sync')
let notaDoAluno = Number(prompt.question('Informe a nota do aluno:'))
let somaDasNotas = 0 // acumulador
let qtdNotasValidas = 0 // acumulador (quantidade de notas validas)

while (notaDoAluno >= 0){
    somaDasNotas += notaDoAluno // incrementando o acumulador
    qtdNotasValidas++ // pos-incremento
    notaDoAluno = Number(prompt.question('Informe a proxima nota:'))
}
console.log(somaDasNotas)
console.log(qtdNotasValidas)
console.log("Média das notas dos alunos=", somaDasNotas / qtdNotasValidas)