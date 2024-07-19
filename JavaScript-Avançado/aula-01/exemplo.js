const fs = require('fs')

console.log('Antes do setTimeout...')
setTimeout(() => {
    console.log('Isso aqui vai ser executado após 2 segundo!')
}, 2 * 1000)

console.log('Depois do setTimeout...')

