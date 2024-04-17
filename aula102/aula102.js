let nome = new String('Samuel Jacobsen Barcellos')
let nome2 = new String('Samuel Jacobsen Barcellos')
let canal = new String('CFBCursos')

console.log(nome)
console.log(typeof(nome))

console.log(nome.charAt(0))
console.log(nome.charAt(1))

console.log(nome.charCodeAt(0))

console.log(nome.concat(canal))

console.log(nome.indexOf('a'))

console.log(nome.lastIndexOf('s'))

console.log(nome.localeCompare(nome2))

console.log(nome.replace('Jacobsen','Teste'))

console.log(nome.search('Barcellos'))

let sobrenome = nome.slice(7,15)
console.log(sobrenome)

let arr_nome = nome.split(' ')
console.log(arr_nome)