let endpoint = 'https://aula122.repl.co/'
fetch(endpoint)
.then(res=>res.json())
.then(dados=>{
    console.log(dados)
})