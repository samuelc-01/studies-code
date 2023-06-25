/* ### Sistema de gastos familiar 

Crie um objeto que possuirá 2 propriedades, ambas do tipo array:

* receitas: [4657]
* despesas: [3478]

Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostras uma mensagem se a família está com saldo 
positivo ou negativo, seguindo do valor do saldo.

*/

let family = {
    incomes: [50000, 20, 1800, 285],
    expenses: [400, 200, 350, 600, 200, 199.8]
}

function sum(array) {
    let total = 0

    for(let value of array){
        total += value
    }
    
    return total
}

function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses
    
    const itsOk = total >= 0

    let balanceText = "Negativo" 
    if (itsOk){
        balanceText = "Positivo"
    }

    console.log(`Seu saldo é ${balanceText}: R${total.toFixed(2)}`)
}


calculateBalance()