 // object --------

// const user = {
 // name: 'Samuel',
 // nickname: 'Schell',
 // idade: 18,
 // address: {
 //   street: 'Rua teste',
 //   number: 176,
 // },
// };

 // Desestruturação ------------------

 //function mostraIdade({ age}) {
 // return age;
 //}

 // Rest operator  ----------------------
 //const { name, ...rest } = user;


 //const array = [1,2,3,4,5,6,7,8,9,10];

 //const [first, , third, ...rest] = array;


 //document.body.innerText = JSON.stringify({first, third, rest})

 //Short Syntax -----------------------

// const name = 'Samuel';
 //const age = 18;

 //const user = {
  //name,
 // age,
 //};

 //Optinal Chaining -----------------------

 //onst user = {
 //name: 'Samuel',
 //nickname: 'Schell',
 //age: 18,
 //address: {
 //street: 'Rua teste',
 //number: 176,
 //zip: {
 //  code: '23423423',
 //  city: 'Rio do Sul'
 //    },
 //  showFullAddreess() {
 //    return 'ok';
 //  }
 // },
 //};

 //const key = 'state';

  //Métodos de array --------------------

 //const array = [1,2,3,4,5];

//for (const i of array) {
//  document.body.innerText += i;  
//}

//array.forEach(item => {
//  document.body.innerText += item;
//})

//const novoArray = array.map(item => {
//  if(item % 2 === 0) {
//    return item* 10;
//  }
//  return item;
//})
// //document.body.innerText = user.address[key]
//
////const novoArray = [];
//
//array.forEach(item => {
//  novoArray.push(item*2);
//})

// map, filter, every, some, find, findIndex, reduce

//onst novoArray = array
//filter(item => item % 2 !== 0)
//map(item => item * 10)


//const todosNumeros = array.every( item => typeof item === "number");


//const itemdifferent = array.some(item => {
//    return typeof item !== 'number'
//})

//const encontrar = array.findIndex(item => item % 2 === 0);

//const soma = array.reduce((acc, item) => {
//    document.body.innerText += acc + ',' + item + ' ---'
//
//    return acc + item
//}, 0)
//
//document.body.innerText = JSON.stringify(soma) 

// Template Literals ---------------

//const name = null;
//const message = `Bem-vindo, ${name ?? 'visitante'}`;

//Promises -------------------

// .then/ .catch

//const somaDoisNumeros = (a, b) => {
//    return new Promise((resolve, reject) => {
//        setTimeout(() => {
//            resolve(a + b)
//        }, 2000);
//
//    });
//}

//fetch('https://api.github.com/users/iceefast')
//
//.then(responde => {
//    return Response.json();
//})
//.then(body => {
//    console.log(body)
//})
//.finally(()=> {
//    console.log('deu')
//})

//.then (response => {
//    response.json().then(body => {
//        console.log(body);
//    })
//})
//.cath (err => {
//    console.log(err);
//})
//
//somaDoisNumeros(1,3)
//.then(soma => {                        // deu tudo certo
//    document.body.innerText = soma
//})
//.catch(err => {                          // deu tudo errado
//    console.log(err)
//})
//document.body.innerText = message

//async function bucaDadosGithub() {
//    try {
//        const response = await fetch('https://api.github.com/users/iceefast');
//        const body = await response.json();
//    
//        console.log(body);
//    } catch(err) {
//    console.log(err);
//    } finally {
//        console.log('deu')
//    }
//}
//
//bucaDadosGithub();

//.then(responde => {
//    return Response.json();
//})
//.then(body => {
//    console.log(body)
//})
//.finally(()=> {
//    console.log('deu')
//})
//}


// DEU TUDO CERTO UHUUUUUUUUUUUUUU

//import {soma, sub, PI} from './lib/math'
//import teste from './lib/sum.js'
//
//console.log(soma(1,2))
//console.log(sub(4,1))
//console.log(PI)
//console.log(teste(2,3))
//
//import {soma as sum} from './lib/math'
//console.log(sum(1,3))

//import {soma} from './lib/sum';
//console.log(soma(1,3))