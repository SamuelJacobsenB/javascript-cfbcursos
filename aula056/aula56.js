const retangulo = document.querySelector('#retangulo')

const carros = ['Polo','Golf','T-Cross']

let ul = '<ul>'

carros.map((el)=>{
    ul+=`<li>${el}</li>`
})
ul+=`</ul>`

// const curso = 'JavaScript'
// const canal = 'CFB cursos'
// //const frase = 'Este é o curso de ' + curso + ' do canal ' + canal

// const frase = `Este é o curso de ${curso} do canal ${canal}.`

retangulo.innerHTML = ul