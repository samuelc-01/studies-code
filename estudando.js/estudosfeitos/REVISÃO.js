/*
REVISÃO 1 - String

String

* Cadeia de caracteres 

"" aspas duplas 
'' aspas simples
`` template literals ou template strings // as crazes permitem quebras de linha e possamos colocar expressões de linguagem.

Ele permite colocar expressões dentro da propria string. (interpolação)

console.log("Samuel")
console.log(`

Samuel teste de revisão
`)

console.log(`Samuel ${1 + 1}`)(interpolação) colocar expressões dentro de uma template string nesse caso.

/*


REVISÃO 2 - Number

Number
       * números
       33 // inteiros
       12.5 // reais = float(números quebrados)
       NaN // Not a Number (Noranumber kkkkkkk)
       Infinity // infinito

console.log(33) inteiros 
console.log(12.4) reais
console.log(12.4 + 54) soma normal
aula passada (`Quanto é ${34 + 45.2}`) interpolação aula passada
console.log(12.5/"asdf") NaN is not a number
*/

/* REVISÃO 3
Boolean
       * somente 2 valores
        true // verdadeiro
        false // falso

/*

/* REVISÃO 4
    * undefined = indefinido

    * null
    * nulo
    * objeto que não possui nada dentro 
    * difirente de indefinido


console.log(undefined === null) Resposta = false
 */


/*
* Object REVISÃO 5
        * Objeto
        * Propriedades/ Atributos 
        * Funcionalidades / Métodos
    
{ propriedade: "valor"}

conosole.log({
    name: "Samuel",                               
    idade: 17,
    andar: function(andar){
        console.log('andar')
    }
})
object === {separa: separado,
 por,
 virgula,} e com dois pontos na atribuição de valores

*/

/* REVISÃO 6
   * Array (Vetores)
          * Uma lista
          * Agrupamento de dados
        
   ["Samuel", 17]                                     array === []

console.log([
    "Leite",
    "Ovos",
    2,
    3
])

*/


/* Exercicio 

1 - let weight
2 - console.log(typeof weight) = undefined
3 - let name = "Samuel"
    let age = 17 ( integer)
    let stars = 2.3(float) (numbero quebrado)
    let isSubscribed = true
4- e um tipo de dado de object

let student = {
    name: "Samuel",
    age: 17 ( integer),
    weight: 62.3(float) (numbero quebrado),
    isSubscribed:  true,

};


console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`)

4.2-  
console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`)

5- let students [] (array vazio)

6-  students = [
    student
console.log(students)
aparece um object que na posição 0 aparece a let student com todos os seus valores.
let student = {
    name: "Samuel",
    age: 17 ( integer),
    weight: 62.3(float) (numbero quebrado),
    isSubscribed:  true,

};
]

7 - console.log(students[0]) ( Coloque no console o valor da posição zero do Array acima)

8- const SamuelProprey = {
    name: "Samuel",
    age: 23,
    weight: 67.2,
    isSubscribed: true,
}

students = [
    student,
    SamuelProprey
]

ou 

students[1] = SamuelProprey
console.log(students)

9- Sem rodar o código responda qual é a resposta do código abaixo e por que ? Após sua resposta, tode o código e veja se você acertou.
  
console.log(a)
var a = 1 

Resposta: Vai imprimir na tela undefined, porque var e uma variavel global e sofre o hoisting (elevação), ou seja o javascript vem lendo o código e consegue identificar que abaixo do console.log tem a 
variavel mas está no lugar 'errado' como ela e global ela sobe mas o js(javascript) não consegue identificar o valor que estava nela.

REvisão das Funções

funtion sum () {

}

ou

// function expression
// function anonymous
// parâmentro (parameters)

const sum = function(number1, number2) {
   console.log(number1 + number2)
}
os parâmetros no caso number1 and number2, grosseiramente falando seria como um nome dado para uma variavel.
sum(2, 3) //invocando a função 2, 3 ali dentro dos parateses são os argumentos.


function expression sum

const sum = function(number1, number2){
       let total = number1 + number2                    --- total recebé number1 + number2 depois return(retorna) return total.
       return total
}

let number1 = 34
let number2 = 25 // aqui eu estou atribuindo valores para os parâmetros 
ou poderia

sum(34, 25)

console.log(`o número 1 é ${number1}`)
console.log(`o número 2 é ${number1}`)
console.log(`a soma é ${sum(number1, nubmer2)}`)


também tem a arrow function que nada mais e do que outro metodo de escrever uma expression function 
ex:
      const sum = () => {}
      - dentro dos paranteses no caso é onde você coloca os parâmetros da função 
ex2:
        const sum = (number1, number2) => {}
}

// Função é um liquidificador

function fazerSuco(fruta1, fruta2) {
    return fruta1 + fruta 2 
}

const copo = fazerSuco('banana', 'maça')
console.log(copo)



// callback function

function sayMyName(name) {
    console.log(name)
}

sayMyName(                        --- na callback você pode passar qualquer tipo de dado inclusive uma função.
    () => {
        console.log("estou em uma callback")
    }
)
explicação: No caso quando você vai invocar, chamar, impmrimir a função na tela pelo seu nome no caso sayMyName que é o nome da função, como você pode passar qualquer tipo da dado você passa uma função
reescrevendo a de cima, sobrepondo a anterior

Estrutura de repetição

for () -para-
while () -enquanto-

for ... of 

let name = "Samuel"
let names =['João', 'Paulo', 'Pedro']
for (let name of name) {
    console.log(name)
}

for ... in

let person = {
    name: 'Samuel',
    age: 17,
    weight: 68.5
}

for(let property in person) {     === let property in person --- em person pegue a propriadade e atribuia a variavel let.
   console.log(property)
   console.log(person.name)
}




*/








