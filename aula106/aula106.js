let nome = new String('Samuel Jacobsen Barcellos 2010')
let email = 'samuel@samuel.com.br'
let numeros = '1, 10, 100, 1000'
console.log(nome)

console.log(nome.search(/samuel/i))

console.log(nome.match(/O/ig))

console.log(nome.replace(/s/ig,'$'))

console.log(nome.match(/[a-c|g-l|0-1]/ig))

//Metacaracteres
console.log(nome.match(/\d/ig)) //Números
console.log(nome.match(/\s/ig)) //Espaços
console.log(nome.match(/\bS/ig)) //DWORD
//

//Quantificadores
let nome2 = new String('Samueeeeeel Jacobseeeeen Barcelloooooos 2010')
console.log(numeros)
console.log(nome2.match(/e+|o+/ig))
console.log(numeros.match(/10/ig))
console.log(numeros.match(/10+/ig))
console.log(numeros.match(/10*/ig))
console.log(numeros.match(/10?/ig))