// 1- Crie uma função construtora para Terreno, cada terreno deve ter:
// largura, comprimento, area(largura x comprimento)
function Terreno( largura, comprimento) {
    this.largura = largura
    this.comprimento = comprimento
    this. area = largura * comprimento
}

// 2 crie métodos usando o prototype, eles devem ser:
// - calcularPreco -> que vai ser a area x 1000 reais.
// - mostrarInfos -> que mostrar a area e o preço do terreno.

Terreno.prototype.calcularPreco = function() {
    this.preco = this.area * 100
    // - calcularPreco -> que vai ser a area x 1000 reais.
}

Terreno.prototype.mostrarInfos = function(){

    console.log(`A area é: ${this.area} e o preço é: ${this.preco}`)
    // - mostrarInfos -> que mostrar a area e o preço do terreno.
}

// 3 - Crie 5 instancias do terreno, usando o operador new. ex: const t1 = new Terreno(arg1, arg2)
const terreno01 = new Terreno(100, 50)

const terreno02 = new Terreno(200, 100)

const terreno03 = new Terreno(300, 200)

const terreno04 = new Terreno(400, 300)

const terreno05 = new Terreno(500, 400)

// 4 - use a função calcular preco para que todas as instancias tenham seus precos.
terreno01.calcularPreco()

terreno02.calcularPreco()

terreno03.calcularPreco()

terreno04.calcularPreco()

terreno05.calcularPreco()

// 5 - crie uma array vazia chamada terrenos.
const terrenos = []


// 6 - insira as instancias criadas(que os precos já tenham sido calculados) na array terrrenos.
terrenos.push(terreno01, terreno02,terreno03, terreno04, terreno05)

console.log(terrenos)

// 7 - Imprima na tela o último terreno da array terrenos.
const ultimo = terrenos[terrenos.length -1]

console.log(ultimo)

// 8 - Imprima a area do terceiro item da array terrenos
const terceiro = terrenos[terrenos.length -3].area

console.log(terceiro)

// 9 - Usando um loop, execute o método mostrarInfos de todos os terrenos.
for ( const item of terrenos){
    console.log(item.mostrarInfos())
}

// 10 - Crie uma função que vai receber a array de objetos e vai ordenar a lista do mais barato para o mais caro.
function ordenarTerrenos(arrTerrrenos){
    const ordenados = arrTerrrenos.sort(function(a,b){
        return a.preco - b.preco
    })
    console.log(ordenados)
}

ordenarTerrenos(terrenos)

// 11 - Crie uma função que Imprima o mais barato
function ordenarTerrenos(arrTerrrenos){
    const ordenados = arrTerrrenos.sort(function(a,b){
        return a.preco - b.preco
    })
    console.log(ordenados[0], ordenados[ordenados.length -1])
}
// 12 - Crie uma função que Imprima o mais caro.
function ordenarTerrenos(arrTerrrenos){
    const ordenados = arrTerrrenos.sort(function(a,b){
        return a.preco + b.preco
    })
    console.log(ordenados[0], ordenados[ordenados.length -1])
}