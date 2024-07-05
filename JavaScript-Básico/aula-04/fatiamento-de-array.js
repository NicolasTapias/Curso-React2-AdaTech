const prompt = require('readline-sync') 
const numeros = [40, 34, 67, 89, 23, 10]

console.log (numeros.slice(0, 2))
console.clear()
// adicionar elemento no final do array
numeros.push(0)
console.log(numeros)

//adicionar elemento que está no final do arry
console.clear()
numeros.unshift(-1)
console.log(numeros)

// pop: remover o elemento que está no final do array
console.clear()
numeros.pop()
console.log(numeros)

// shift: remover o primeiro elemento do array
console.clear()
numeros.shift()
console.log(numeros)

// será que elemento 20 existe no array numeros?
console.clear()
console.log(numeros.includes(20))
console.log(numeros.includes(10))

if(numeros.includes(20)){
    console.log('Opa! Existe o numero 10 dentro do array numeros!')
} else {
    console.log('Opa! Existe o numero 20 dentro do array numeros!')
}

const existeONumero20 = numeros.includes(20)
console.clear()

// indexOf

const indiceDoElemento10 = numeros.indexOf(10)
console.log(indiceDoElemento10)
console.clear()

const indiceDoElemento40 = numeros.lastIndexOf(10)
console.log(indiceDoElemento40)
console.clear()
//Percorrendo Arrays com For

const arr = [45, 36, 90, 76, 32, 7]
for(let i = 0; i < arr.length; i++){
    console.log(i, arr[i])
}
console.clear()
// for-of
for (const qualquerCoisa of arr){
    console.log(qualquerCoisa)
}