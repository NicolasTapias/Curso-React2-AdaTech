// Every -> Array.prototype.every(): Verificar se todos os elementos de um array seguem uma determinada condição retornada pela função
const numeros = [40, 34, 67, 89, 23, 10]
const pessoas = [{nome: 'Pessoa 1', idade: 34,}, {nome: 'Pessoa 2', idade: 24,}, {nome: 'Pessoa 3', idade: 46,}]

const todosPositivos = numeros.every((elemento) => elemento > 0)

console.log(todosPositivos)

const todosMaioresDeIdade = pessoas.every((pessoa) => pessoa.idade > 18)

console.log(todosMaioresDeIdade)

// Some -> Array.prototype.some(): Verificar se algum elemento do arrya torna verdadeira uma determinada condição retornada pela função

console.clear()
const numeros2 = [-1, 3, 7, -3, 5]

const retorno = numeros2.some((numero) => numero > 0)

console.log(retorno)