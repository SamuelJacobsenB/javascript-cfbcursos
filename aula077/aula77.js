const div_data = document.querySelector('#div_data')
const data = new Date()

const dia = data.getDate()<10?'0'+data.getDate():data.getDate()
const mes = data.getMonth()<10?'0'+data.getMonth():data.getMonth()
const data_r = `${dia}/${mes}/${data.getFullYear()}`

div_data.innerHTML = data_r

// console.log(Date.now())

// console.log(data)
// console.log(data.getDate())