// MAP
// Ele cria um novo array que possui o mesmo tamanho do arrya original
// Composto pelos elementos que foram retornoados a cada interação

const numeros = [40, 34, 67, 89, 23, 10]

const novoArray = numeros.map((elemento) => {
    return elemento * 2
})

console.log(novoArray)

console.clear()

// Exemplo 1: Elevando todos os numeros ao quadrado 

const valores = [39, 45, 32, 24, 4, 22, 2, 49, 23, 8]

const valoresAoQuadrado = valores.map((valor) => valor **2)

console.log(valoresAoQuadrado)
console.clear()

// Exemplo 2: Adicionando uma propriedade aos objetos de array

const carrinho = [
    {produto:"Arroz", preco:7.98, quantidade:3},
    {produto:"Feijão", preco:4.98, quantidade:5},
    {produto:"Leite 1L", preco:6.99, quantidade:2},
]
const carrinhoComTotal = carrinho.map((itemDoCarrinho) =>{
    return {
        ...itemDoCarrinho,
        total: itemDoCarrinho.preco * itemDoCarrinho.quantidade,
    }

})


console.log(carrinhoComTotal)