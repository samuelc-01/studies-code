// dois metodos diferentes de fazer um conecção com api usando ayncronismo 
// primeiro metodo usasse o encapsulamento de metodos then(então) e catch(tratamento de erro)
// segundo metodo usasse a função asyncrona usando await e pegando o resultado.

async function start(){

    const user = await fetch('https://api.github.com/users/maykbrito').then(r => r.json())
    const repos = await fetch(user.repos_url).then(r => r.json());
    console.log(repos);
    } 

start().catch(e => console.log(e))
