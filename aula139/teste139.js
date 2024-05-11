import { Cxmsg } from "./cxmsg.js";

let configCor = {
    cor:'black'
}

Cxmsg.config(configCor)

let btn_mostrar = document.querySelector('#btn_mostrar')

btn_mostrar.addEventListener('click',(evt)=>{
    Cxmsg.mostrar('Teste138 de JavaScript','Olá estou testando esta caixa de texto com outra cor.')
})