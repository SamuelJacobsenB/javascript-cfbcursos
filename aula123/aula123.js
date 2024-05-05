const p_temp = document.getElementById('p_')
const p_nivel = document.getElementById('p_nivel')
const p_press = document.getElementById('p_press')

const obterDados = ()=>{
    let endpoint = 'https://aula122.repl.co/'
    fetch(endpoint)
    .then(res=>res.json())
    .then(dados=>{
        console.log(dados)
        p_temp.innerHTML = `Temperatura:${dados.temperatura}`
        p_nivel.innerHTML = `Nível:${dados.nivel}`
        p_press.innerHTML = `Pressão:${dados.pressao}`
    })
}

let intervalo = setInterval(obterDados,3000)