const config = {
    cor:'#48f'
}
const cxmsg = new Cxmsg(config)

const btn_mostrarcxmsg1 = document.querySelector('#btn_mostrarcxmsg1')
const btn_mostrarcxmsg2 = document.querySelector('#btn_mostrarcxmsg2')
const btn_mostrarcxmsg3 = document.querySelector('#btn_mostrarcxmsg3')

btn_mostrarcxmsg1.addEventListener('click',(evt)=>{
    cxmsg.mostrar('Teste 1','Veja o próximo teste.')
})

btn_mostrarcxmsg2.addEventListener('click',(evt)=>{
    cxmsg.mostrar('Teste 2','Veja o próximo teste.')
})

btn_mostrarcxmsg3.addEventListener('click',(evt)=>{
    cxmsg.mostrar('Teste 3','Acabaram os testes.')
})