const Pessoa ={
    nome:'',
    idade:'',

    getNome:function(){
        return this.nome
    },
    getIdade:function(){
        return this.idade
    },

    setNome:function(nome){
        this.nome = nome
    },
    setIdade:function(idade){
        this.idade = idade
    }
}

const btn_add = document.querySelector('#btn_add')
const res = document.querySelector('.res')

const addPessoa = ()=>{
    res.innerHTML = ''
    let div = document.createElement('div')
    div.setAttribute('class','pessoa')
    div.innerHTML = `Nome: ${Pessoa.nome}<br>Idade: ${Pessoa.idade}`
    res.appendChild(div)
}

btn_add.addEventListener('click',()=>{
    const nome  = document.querySelector('#f_nome')
    const idade =  document.querySelector('#f_idade')
    Pessoa.setNome(nome.value)
    Pessoa.setIdade(idade.value)
    addPessoa()
})

// const p2= Pessoa
// const p3= Pessoa

// p3.nome= 'Maria'
// p2['nome']='Rodrigo'
// Pessoa.setNome('Mírian')

// console.log(Pessoa.nome)
// console.log(p2.getNome())
// console.log(p3.nome)