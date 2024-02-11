let resultado = document.querySelector('#resultado')
const btn_somar = document.querySelector('#soma')
const btn_subtrair = document.querySelector('#subtracao')
const btn_multiplicar = document.querySelector('#multiplicacao')
const btn_dividir = document.querySelector('#divisao')

const op = [
    ()=>{
        const val = [document.querySelector('#valor1').value, document.querySelector('#valor2').value]
        resultado.value = Number(val[0]) + Number(val[1])
    },
    ()=>{
        const val = [document.querySelector('#valor1').value,document.querySelector('#valor2').value]
        resultado.value = Number(val[0]) - Number(val[1])
    },
    ()=>{
        const val = [document.querySelector('#valor1').value,document.querySelector('#valor2').value]
        resultado.value = Number(val[0]) * Number(val[1])
    },
    ()=>{
        const val = [document.querySelector('#valor1').value,document.querySelector('#valor2').value]
        resultado.value = Number(val[0]) / Number(val[1])
    }
]

btn_somar.addEventListener('click', ()=>{op[0]()})
btn_subtrair.addEventListener('click', ()=>{op[1]()})
btn_multiplicar.addEventListener('click', ()=>{op[2]()})
btn_dividir.addEventListener('click', ()=>{op[3]()})

