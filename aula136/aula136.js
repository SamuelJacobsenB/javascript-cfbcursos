const config = {
    titulo:'Teste',
    texto:'Curso de JS',
    cor:'#48f'
}
const cxmsg = new Cxmsg(config)

const btn_mostrarcxmsg = document.querySelector('#btn_mostrarcxmsg')

btn_mostrarcxmsg.addEventListener('click',(evt)=>{
    cxmsg.mostrar()
})