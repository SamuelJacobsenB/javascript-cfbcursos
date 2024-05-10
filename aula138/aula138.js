import { Cxmsg } from "./cxmsg.js";

const config = {
    cor:'#48f'
}
Cxmsg.config(config)

const btn_mostrarcxmsg1 = document.querySelector('#btn_mostrarcxmsg1')
const btn_mostrarcxmsg2 = document.querySelector('#btn_mostrarcxmsg2')
const btn_mostrarcxmsg3 = document.querySelector('#btn_mostrarcxmsg3')

btn_mostrarcxmsg1.addEventListener('click',(evt)=>{
    Cxmsg.mostrar('Teste 1','Veja o próximo teste.')
})

btn_mostrarcxmsg2.addEventListener('click',(evt)=>{
    Cxmsg.mostrar('Teste 2','Veja o próximo teste.')
})

btn_mostrarcxmsg3.addEventListener('click',(evt)=>{
    Cxmsg.mostrar('Teste 3','Acabaram os testes.')
})