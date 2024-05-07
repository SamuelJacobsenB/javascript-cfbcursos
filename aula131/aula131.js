const timer = document.querySelector('#timer')
const btn_iniciar = document.querySelector('#btn_iniciar')
const btn_parar = document.querySelector('#btn_parar')
const btn_zerar = document.querySelector('#btn_zerar')

let intervalo = null
let tmpini = null

const contador=()=>{
    const tmpatual = Date.now()
    let cont = tmpatual - tmpini
    let seg = Math.floor((tmpatual - tmpini)/1000)
    timer.innerHTML = converter(seg)
}

const converter=(seg)=>{
    let hora = Math.floor(seg/3600)
    let resto = seg%3600
    let minuto = Math.floor(resto/60)
    let segundo = Math.floor(resto%60)
    let tempoformatado = (hora<10?'0'+hora:hora)+':'+(minuto<10?'0'+minuto:minuto)+':'+(segundo<10?'0'+segundo:segundo)

    return tempoformatado
}

btn_iniciar.addEventListener('click',(evt)=>{
    tmpini = Date.now()
    intervalo = setInterval(contador,1000)
})

btn_parar.addEventListener('click',(evt)=>{
    clearInterval(intervalo)
})

btn_zerar.addEventListener('click',(evt)=>{
    tmpini = Date.now()
    clearInterval(intervalo)
    timer.innerHTML = '00:00:00'
})