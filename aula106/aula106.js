let nome = new String('Samuel Jacobsen Barcellos 2010')
let email = 'samuel@samuel.com.br'
console.log(nome)

console.log(nome.search(/samuel/i))

console.log(nome.match(/O/ig))

console.log(nome.replace(/s/ig,'$'))

console.log(nome.match(/[a-c|g-l|0-1]/ig))

console.log(nome.match(/\d/ig))