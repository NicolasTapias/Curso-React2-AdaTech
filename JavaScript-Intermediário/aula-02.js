// FUNÇÕES DE ALTA ORDEM DE ARRAYS
// array.forEach()

const numeros = [40, 34, 67, 89, 23, 10]

numeros.forEach((elemento, index, arrayCompleto) => {
    console.log(index, elemento, arrayCompleto)
})
console.clear()
// array.find: util para encontrar um elemento dentro do array

const encontrado = numeros.find((item) => {
    return item < 20 && item > 10
})

console.log(encontrado) 

const pessoas = [{nome: 'Pessoa 1', idade: 34,}, {nome: 'Pessoa 2', idade: 24,}, {nome: 'Pessoa 3', idade: 46,}]

const pessoaEncontrada = pessoas.find((pessoas) => pessoas.idade > 40)

console.log(pessoaEncontrada)