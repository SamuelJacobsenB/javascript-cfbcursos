const caixa1 = document.querySelector('div#caixa1')
const btn_c1 = document.querySelector('div#c1')
const cursos = [...document.querySelectorAll('.curso')]

caixa1.addEventListener('click',(evt)=>{
    console.log('clicou')
    console.log(evt)
    alert('Clicou!!! no elemento que tem Propagation')
})

cursos.map((el)=>{
    el.addEventListener('click',(evt)=>{
        evt.stopPropagation()
    })
})