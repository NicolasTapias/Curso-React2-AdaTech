// Filter
// map: sempre retorna um array de mesmo tamanho do array original
// filter: sempre retorna um array de mesmo tamanho igual ou inferior ao tamanho do array original 

let valores = [39, 45, 32, 24, 4, 22, 2, 49, 23, 8]

const pares = valores.filter((valor) => valor % 2 === 0)

console.log(pares)
console.clear()

// Exemplo 1

const alunos = [
    {nome:'Quincy', media:96},
    {nome:'Jason', media:84},
    {nome:'Alexis', media:100},
    {nome:'Sam', media:65},
    {nome:'Katie', media:90}
]
const alunosComMediaSuperiorA85 = alunos.filter((aluno) => aluno.media > 85)

console.log(alunosComMediaSuperiorA85)