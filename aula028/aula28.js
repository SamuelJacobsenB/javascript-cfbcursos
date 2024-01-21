const converterInt = (e)=>parseInt(e)
const dobrar = (e)=>e*2
let num = ['1','2','3','4','5'].map(dobrar)

console.log(num)

/* DOM
const el = document.getElementsByTagName('div')
const val = Array.prototype.map.call(el,({innerHTML})=>innerHTML)

console.log(val)
*/

/* DOM
let el = document.getElementsByTagName('div')
el = [...el]
console.log(el)
el.map((e,i)=>{
    e.innerHTML = 'Curso de JS'
})
*/

/*
const cursos = ['HTML','CSS','JavaScript','PHP','React']

cursos.map((el,i)=>{
    console.log(`Curso: ${el} - Posicão do curso: ${i}.`)
})

console.log('--------------------')
console.log('--------------------')
console.log('--------------------')

let c = cursos.map((el,i)=>{
    return el
})

console.log(c)

console.log('--------------------')
console.log('--------------------')
console.log('--------------------')


let exNaoFuncional = cursos.map((el,i)=>{
    return '<div>' + el + '</div>'
})

console.log(exNaoFuncional)

console.log('--------------------')
console.log('--------------------')
console.log('--------------------')
*/