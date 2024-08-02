const { error } = require('console')
const fs = require('fs')

console.log('Antes da criação da promise...')
const promessa = new Promise((resolve, reject) => {
    fs.readFile('./JavaScript-Avançado/aula-01/arquivo.txt', (erro, conteudoDoArquivo) => {
        if(erro) {
            reject('Ocorreu um erro ao tentar ler o arquivo:', erro)
        } else {
            resolve(String(conteudoDoArquivo))
        }
    })
}) //criando uma promessa
 
promessa.then((retornoDoResolveDaPromise) => {
    console.log('Deu certo:', retornoDoResolveDaPromise)
})
.catch(() => {
    console.log('Deu ruim:', erro)
})
.finally(() => {
    console.log('Isso aqui vai ser executado independente do sucesso ou fracasso da promessa final dela.')
})