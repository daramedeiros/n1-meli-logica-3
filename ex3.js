const r = require("readline-sync")

//objetos

// 1.
// Defina um objeto de
// Javascript que descreva
// um dos pokemons da lista
// de pokemons do Wikipedia.
// com pelo menos 4 propriedades e 1 método
// ref: https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon

const pokemon = {}

pokemon.nome = "Pikachu"
pokemon.nomeJapones = "Pikachu"
pokemon.numEmJapones = 022
pokemon.ev = "Pichu"

pokemon.falar = function () {
    console.log('Pika, Pika')
}

console.log(` Esse é o nome do meu pokemom escolhido ${pokemon.nome}, ele tem o mesmo nome em Japones ${pokemon.nomeJapones} e o seu ev é ${pokemon.ev} \n Ele sempre fala:`)

console.log(pokemon.falar())

// 2.
// Printe no console a seguinte
// frase: "Oi, meu nome é  < >.
// e meu nome japones é < >."

console.log(`Oi meu nome é: ${pokemon.nome} e meu nome em japones é ${pokemon.nomeJapones}! HAHAHA`)

// 3.
// Adicione uma nova propriedade ao
// seu pokemon chamada `sabe_voar`
// (ou algo do tipo) e defina
// ela como `true` ou `false`.
pokemon.sabe_voar = false

// 4.
// Adicione um método ao seu pokemon
// chamado `voar` que retorna "Desculpa, nao sei voar." ou "
// To voaaaaaando!".
pokemon.voar = function (sabe_voar) {
    if (sabe_voar == true) {
        console.log("To voaaaaaando!")
    } else {
        console.log("Desculpa, nao sei voar.")
    }
}

console.log(pokemon.voar())
    

// 5.
// Adicione um método chamado
// `action` ao seu pokemon
// que retorna randomicamente uma
// das Strings "FIGHT", "BAG" ou "RUN".

// 6.
// Adicione um método chamado
// `pergunta` ao seu pokemon que printa
// no console "O que o  < > vai fazer?" e
// retorna o resultado do metodo
// `acao`.

// 7.
// Printe todas as propriedades
// do seu pokemon no console.

// 8.
// Printe todas as propriedades
// e seus respectivos valores no
// console no seguinte formato:
// <propriedade>: <valor

//9 Faça uma função construtora de pokemon
