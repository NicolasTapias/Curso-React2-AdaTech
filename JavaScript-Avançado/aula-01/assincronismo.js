const fs = require('fs')

// 1. Callbacks

console.log('Antes de ler o arquivo...')

//função assincrona
fs.readFile('./JavaScript-Avançado/aula-01/arquivo.txt', (erro, conteudoDoArquivo) => {
    if(erro) {
        console.log('Ocorreu um erro ao tentar ler o arquivo:', erro)
    } else {
        console.log(String(conteudoDoArquivo))
    }
})

console.log('Depois da função de ler o arquivo...')