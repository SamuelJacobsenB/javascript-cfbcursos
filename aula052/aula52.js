const retangulo = document.querySelector('#retangulo')

let cores = ['azul','verde','vermelho',['claro','escuro','médio']]
let cursos = ['HTML','CSS','JavaScript',cores]

//cursos[0] = 2024

// cursos.push('C++')
// cursos.push('C++')
// cursos.pop()

// cursos.unshift('Python')
// cursos.unshift('Python')
// cursos.shift()

console.log(cursos[3][3][2])

cursos.map((el)=>{
    let p = document.createElement('p')
    p.innerHTML = el
    retangulo.appendChild(p)
})

console.log(cursos)