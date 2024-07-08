// funções de alta ordem -> Função que retorna outra função como parametro

function welcome(courseName, studantName){
    return (studantName) =>{
        console.log(`Olá ${studantName}! Seja bem-vindo(a) ao curso de ${courseName}`)
    } 
}

const displayToFrontEndCourse = welcome('Front-end em React!')

displayToFrontEndCourse('Nicolas Tapias')
console.clear()

// função que recebe outra função como parametro

const soma = (num1, num2) => num1 + num2
const subtrair = (num1, num2) => num1 - num2
const multiplicar = (num1, num2) => num1 * num2
const dividir = (num1, num2) => num1 / num2

// operação vai ser uma função que realiza a operação entre dois numeros, ou seja, ela precisa ser uma função que receba 2 numeros
const calcular = (num1, num2, funcaoDaOperacao) => funcaoDaOperacao(num1, num2)

const retorno = calcular(10, 5, dividir)
console.log(retorno)

// o calculo que eu quero fazer é: (num1 * num2) + (2 * num1 * num2)

const resultado = calcular(10, 5, (num1, num2) => (num1 * num2) + (2 * num1 * num2))

console.log(resultado)