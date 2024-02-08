const p_array = document.querySelector('#array')
const btnVerificar = document.querySelector('#btnVerificar')
const resultado = document.querySelector('#resultado')

const elementos_array = [13,7,20,17,15,10]
p_array.innerHTML = '[' + elementos_array + ']'

btnVerificar.addEventListener('click',(evt)=>{
    const ret = elementos_array.some((e,i)=>{
        if(e < 18){
            resultado.innerHTML = 'Array não conforme'
        }
        return e >= 18
    })
    if(ret == true){
        resultado.innerHTML = 'Array com conformidade = OK'
    }
})