const btn_alert = document.getElementById('btn_alert')
const btn_confirm = document.getElementById('btn_confirm')
const btn_prompt = document.getElementById('btn_prompt')

btn_alert.addEventListener('click',(evt)=>{
    alert('Olá, como você está?')
})

btn_confirm.addEventListener('click',(evt)=>{
    const retorno = confirm('Você está aprendendo muito?')
    if(retorno == true){
        alert('Que bom!!! ;)')
    } else{
        alert('Que pena... :(')
    }
})

btn_prompt.addEventListener('click',(evt)=>{
    const nome = prompt('Digite seu nome:')
    if(nome!=null && nome!=''){
        alert(`Olá ${nome}, tudo bem? :)`)
    } else if(nome==null){
        alert('Por que você cancelou??? :(')
    } else if(nome==''){
        alert('Por que você não digitou nada??? :(')
    }
})