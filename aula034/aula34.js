//const c1 = document.getElementById('c1')
//const c1 = document.querySelector('div#c1')
const cursos = [...document.querySelectorAll('div.curso')]

cursos.map((el)=>{
    el.addEventListener('click', (evt)=>{
        const el = evt.target 
        el.classList.add('destaque')
        console.log(`${el.innerHTML} foi clicado!!!`)
    })
})

//c1.addEventListener('click', (evt)=>{
//    const el = evt.target 
//    el.classList.add('destaque')
//})

/*Maneiras

c1.addEventListener('click', ()=>{
    alert('clicou')
})

const msg = ()=>{
    alert('clicou')
}

c1.addEventListener('click', ()=>{
    msg()
})

c1.addEventListener('click', msg)
*/

