//throw

function sayMyName(name = '') {
    if (name === '') {
        throw new Error("Nome é necessário teste 1 ")
    }

    console.log('depois do erro')
}
// try...catch

try {
    sayMyName('Samuel')
} catch(e) {
    console.log(e)
}

console.log('após ao try/catch')

/* throw é como 'jogar' um erro na sua aplicação no seu projeto para testar se esta tudo certo 
   try e a parte deste mesmo 'programa' fazendo isso (tentando)
   catch é um tipo de return depois deste teste muito importate ser usado pois sem ele provavelmente você não vai 
   conseguir prosseguir o programa, pois ele vai se perder
   #### Assiti essa aula só uma vez meu entendimento inicial####
*/ 
