const permissoes = 'aluno'

switch(permissoes) {
    case 'aluno':
        console.log('Voce so pode visualizar as aulas')
        break
         
    case 'professor':
        console.log('Voce pode alterar as aulas e adicionar exercicios')
        break

    case 'admin':
        console.log('Voce pode fazer o que quiser')
        break

    default:
        console.log('Nao sei quem voce e no sistema')
}