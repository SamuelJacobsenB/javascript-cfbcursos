const f_texto = document.querySelector('#f_texto');
const p_texto = document.querySelector('#p_texto');
const btn_texto = document.querySelector('#btn_texto');

btn_texto.addEventListener('click',(evt)=>{

})

let num = 10
const curso = 'JavaScript'
// window.localStorage.setItem('curso',curso)
// window.localStorage.setItem('nome','Samuel')
// alert(localStorage.length)
// alert(localStorage.key(0))
// alert(window.localStorage.getItem('nome'))
// alert(window.localStorage.getItem('curso'))
localStorage.clear()

window.sessionStorage.setItem('curso',curso)
window.sessionStorage.setItem('nome','Samuel')