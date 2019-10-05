// use Map, filter, forEach, find e ou Reduce.

//1

// retorne numeros multiplos de 3
// const multiplosDe3 = numbers.filter(num => num % 3 === 0 )

// console.log(multiplosDe3)

// retorne numeros multiplos de 3 e de 5


const numbers = [
    1,
    3,
    4,
    6,
    8,
    9,
    56,
    34,
    23,
    2,
    89,
    101,
    320,
    12,
    13,
    45,
    40,
    43,
    88
  ]

  console.log(numbers);
  




//2
const palavrinhas = [
  "bolacha",
  "biscoito",
  "bombom",
  "bala",
  "abestalhado",
  "MASSA",
  "pastilha"
]
// retorne palavras que tenham menos de 5 letras
const novaArr = palavrinhas.filter(item => item.length < 5)
console.log(novaArr)


//3
const num = [3, 4, 5, 6, 6, 7]
// // itere pela array modificando todos os items, multiplicando eles por 3.

const numMult3 = num.map(function(item){
    return item * 3;
});
console.log(numMult3)

// // depois prite quantos numeros são maiores que 10
function maiorQue10 (value){
    return value >= 10
}

const resultadoMaiorQue10 = numMult3.filter(maiorQue10);

console.log(resultadoMaiorQue10.length)

// // depois quantos são menores que 10.
function menorQue10 (value){
    return value <= 10
}

const resultadoMenorQue10 = numMult3.filter(menorQue10);

console.log(resultadoMenorQue10.length)

// // printe o numero menor que 10.
console.log(resultadoMenorQue10)


//4
const numArr = [
  1,
  3,
  4,
  6,
  8,
  9,
  56,
  34,
  23,
  2,
  89,
  101,
  320,
  12,
  13,
  45,
  40,
  43,
  88
]
// calcule o valor total da soma dos items da array numbers
const soma = (accumulator, currentValue) => accumulator + currentValue

console.log(numArr.reduce(soma))


//5 -
const mulheres = [
  {
    user: 234,
    name: "Marcia",
    idade: 40,
    hobbies: ["estudar", "comer", "falar"]
  },
  {
    user: 235,
    name: "Lorena",
    idade: 20,
    hobbies: ["dançar", "assistir tv", "estudar"]
  },
  {
    user: 236,
    name: "Patricia",
    idade: 24,
    hobbies: ["correr", "acampar", "surfar"]
  },
  {
    user: 237,
    name: "Mariana",
    idade: 15,
    hobbies: ["skate", "bicicleta", "break dance"]
  },
  {
    user: 238,
    name: "Isis",
    idade: 34,
    hobbies: ["ler", "estudar", "discutir"]
  },
  {
    user: 239,
    name: "Pietra",
    idade: 23,
    hobbies: ["jogar dominó", "sinuca", "cartas"]
  }
]

// retore a mulher que tiver o user = 238
const user238 = mulheres.find(function(element){
    return element.user === 238
})

console.log(user238)

// retorne o nome das mulheres que gostam de estudar
const estudiosas = mulheres.filter(item => item.hobbies.indexOf("estudar") > -1)

console.log(estudiosas.name)

estudiosas.map(item => {
    console.log(item.name)
})