const caixaCursos = document.querySelector('#caixaCursos')
const btn_c = [...document.querySelectorAll('.curso')]
const cursos = ['HTML','CSS','JavaScript','PHP','React','MySQL','ReactNative']
const btnCursosSelecionado = document.querySelector('#btnCursoSelecionado')
const btnRemoverCurso = document.querySelector('#btnRemoverCurso')
const btnAdicionarNovoCursoAntes = document.querySelector('#btnAdicionarNovoCursoAntes')
const btnAdicionarNovoCursoDepois = document.querySelector('#btnAdicionarNovoCursoDepois')
const nomeCurso = document.querySelector('#nomeCurso')

let indice = 0

const tirarSelecao = ()=>{
    const cursosSelecionados = [...document.querySelectorAll('.selecionado')].map((el)=>{
        el.classList.remove('selecionado')
    })
}

const criarNovoCurso=(curso)=>{
    const novoElemento = document.createElement('div')
    novoElemento.setAttribute('id',`c${indice}`)
    novoElemento.setAttribute('class','curso c1')
    novoElemento.innerHTML = curso
    novoElemento.addEventListener('click',(evt)=>{
        tirarSelecao()
        evt.target.classList.toggle('selecionado')
    })
    return novoElemento
}

cursos.map((el,chave)=>{
    const novoElemento = criarNovoCurso(el)
    caixaCursos.appendChild(novoElemento)
    indice++
})

const cursoSelecionado = ()=>{
    const cursosSelecionados = [...document.querySelectorAll('.selecionado')]
    return cursosSelecionados[0]
}

btnCursoSelecionado.addEventListener('click',(evt)=>{
    if (cursoSelecionado()!=undefined){
        alert('Curso selecionado: ' + cursoSelecionado().innerHTML)
    } else {
        alert('Selecione um curso.')
    }
})

btnRemoverCurso.addEventListener('click',(evt)=>{
    if (cursoSelecionado()!=undefined){
        cursoSelecionado().remove()
    } else {
        alert('Selecione um curso.')
    }
})

btnAdicionarNovoCursoAntes.addEventListener('click',(evt)=>{
    if (cursoSelecionado()!=undefined){
        if (nomeCurso.value!=''){
            const novoCurso = criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso,cursoSelecionado())
        }  else {
            alert('.Digite um curso.')
        }
    } else {
        alert('.Selecione um curso.')
    }
})

btnAdicionarNovoCursoDepois.addEventListener('click',(evt)=>{
    if (cursoSelecionado()!=undefined){
        if (nomeCurso.value!=''){
            const novoCurso = criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso,cursoSelecionado().nextSibling)
        }  else {
            alert('.Digite um curso.')
        }
    } else {
        alert('.Selecione um curso.')
    }
})