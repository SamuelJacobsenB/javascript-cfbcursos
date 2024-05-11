import { Cxmsg } from "./cxmsg.js";

const config = {
    cor:'#48f',
    tipo:'ok',
    textos:['SIM','NÃO'],
    comando_sn:()=>{}
}

const fsim=()=>{
    console.log('Botão SIM pressionado')
}

const btn_mostrarcxmsg1 = document.querySelector('#btn_mostrarcxmsg1')
const btn_mostrarcxmsg2 = document.querySelector('#btn_mostrarcxmsg2')
const btn_mostrarcxmsg3 = document.querySelector('#btn_mostrarcxmsg3')

btn_mostrarcxmsg1.addEventListener('click',(evt)=>{
    config.tipo='ok'
    Cxmsg.mostrar(config,'Teste 1','Veja o próximo teste.')
})

btn_mostrarcxmsg2.addEventListener('click',(evt)=>{
    config.tipo='sn'
    config.comando_sn=()=>{sim()}
    Cxmsg.mostrar(config,'Teste 2','Veja o próximo teste.')
})

btn_mostrarcxmsg3.addEventListener('click',(evt)=>{
    config.tipo='sn'
    config.textos=['OK','CANCELA']
    Cxmsg.mostrar(config,'Teste 3','Acabaram os testes.')
})