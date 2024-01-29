const caixaCursos = document.querySelector('#caixaCursos')
const btn_c = [...document.querySelectorAll('.curso')]
const cursos = ['HTML','CSS','JavaScript','PHP','React','MySQL','ReactNative']
const btnCursosSelecionado = document.querySelector('#btnCursoSelecionado')

cursos.map((el,chave)=>{
    const novoElemento = document.createElement('div')
    novoElemento.setAttribute('id',`c${chave}`)
    novoElemento.setAttribute('class','curso c1')
    novoElemento.innerHTML = el

    const comandos = document.createElement('div')
    comandos.setAttribute('class','comandos')

    const rb = document.createElement('input')
    rb.setAttribute('type','radio')
    rb.setAttribute('name','rb_curso')

    comandos.appendChild(rb)

    novoElemento.appendChild(comandos)

    caixaCursos.appendChild(novoElemento)

})

btnCursosSelecionado.addEventListener('click',(evt)=>{
    const todosRadios = [...document.querySelectorAll('input[type=radio]')]
    let radioSelecionado = todosRadios.filter((ele,ind,arr)=>{
        return ele.checked
    })
    radioSelecionado = radioSelecionado[0]
    //const cursoSelecionado = radioSelecionado.parentNode.parentNode.firstChild.textContent
    const cursoSelecionado = radioSelecionado.parentNode.previousSibling.textContent
    alert('Curso selecionado:' + cursoSelecionado)
})