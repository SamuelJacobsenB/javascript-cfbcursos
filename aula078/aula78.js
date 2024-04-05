const div_data = document.querySelector('#div_data')
const div_relogio = document.querySelector("#div_relogio")

const data = new Date()

const dia = data.getDate()<10?'0'+data.getDate():data.getDate()
const mes = data.getMonth()<10?'0'+data.getMonth():data.getMonth()
const data_r = `${dia}/${mes}/${data.getFullYear()}`
div_data.innerHTML = data_r

const relogio = ()=>{
    const data = new Date()

    let hora = data.getHours()
    hora=hora<10?`0${hora}`:hora

    let minutos = data.getMinutes()
    minutos=minutos<10?`0${minutos}`:minutos

    let segundos = data.getSeconds()
    segundos=segundos<10?`0${segundos}`:segundos

    const hora_completa = `${hora}:${minutos}:${segundos}`

    div_relogio.innerHTML = hora_completa
}

const intervalo = setInterval(relogio,1000)

// console.log(Date.now())

// console.log(data)
// console.log(data.getDate())