const numeros = [1, 2, 3, 4, 5]

const media = numeros.reduce((acumulador, elemento, __, arrayCompleto) => {
    console.log(acumulador)
    return (elemento / arrayCompleto.length) + acumulador
}, 0)

console.log(media)



