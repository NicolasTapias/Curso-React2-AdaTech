const array = ['Nicolas', 24, 1.71, true]

const pessoa = { 
    nome: 'Nicolas',
    idade: 27,
    altura: 1.77,
    ehProgramador: true,
    hobbies: ['Jogar WoW', 'Academia'],
    imprimirAlgo: () => {
        console.log ("Opa!");
    },
 }
 console.log(pessoa)
 console.clear()

 console.log(pessoa.nome)
 console.log(pessoa.hobbies)
 console.log(pessoa['idade'])
 console.clear()

 pessoa.profissao = 'Desenvolvedor'

 pessoa.nome = 'Nicolas Tapias'

 console.log(pessoa)

 delete pessoa.altura

 console.log(pessoa)
 console.clear()
 pessoa.imprimirAlgo
 console.clear()

 function funcao(array) {
    let acc = 0;
  
    for (let elemento of array) {
      acc += elemento;
    }
  
    return (acc / array.length);
  }
  
  console.log(funcao([4, 6, 4, 2]));