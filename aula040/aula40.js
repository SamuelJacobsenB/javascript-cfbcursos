const caixa1 = document.querySelector('div#caixa1')
const btn_c = [...document.querySelectorAll('.curso')]
const cursos = ['HTML','CSS','JavaScript','PHP','React','MySQL','React Native']

cursos.map((el,chave)=>{
    const novoElemento = document.createElement('div')
    novoElemento.setAttribute('id',`c${++chave}`)
    novoElemento.setAttribute('class','curso c1')
    novoElemento.innerHTML = el
    caixa1.appendChild(novoElemento)
})