// # Exercício 1

// Crie um array vazio chamado `sacolao`, e siga os passos abaixo:

let sacolao = []

// a) Crie três objetos que vão representar frutas do sacolão. Os objetos devem ter as seguintes propriedades: 
const fruta1 = {
    nome: 'maçã',
    preco: 2,
    disponibilidade: true
}
const fruta2 = {
    nome: 'laranja',
    preco: 2,
    disponibilidade: true
}
const fruta3 = {
    nome: 'kiwi',
    preco: 2,
    disponibilidade: false
}
// ```jsx
// nome: string;
// preco: number;
// disponibilidade: boolean;
// ```

// b) Adicione os objetos ao array `sacolao` utilizando o método **`push()`**
sacolao.push(fruta1)
sacolao.push(fruta2)
sacolao.push(fruta3)
// c) Imprima a o array `sacolao`, e certifique-se de que agora ela seja um array **com três objetos**
console.log(sacolao);