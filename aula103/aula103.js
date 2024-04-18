let nome = new String('Samuel Jacobsen Barcellos')
let nome2 = new String('Samuel Jacobsen Barcellos')
let nome3 = new String(nome.toUpperCase())
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

let parte1 = nome.substring(0,6)
console.log(parte1)

console.log(nome3) //toUpperCase()
console.log(nome3.toLowerCase())

console.log(nome.valueOf())

let num = 10
console.log(typeof(num.toString()))