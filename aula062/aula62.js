class Carro{ //classe PAI
    constructor(nome,portas){
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.vel = 0
        this.cor = undefined
    }
    ligar=()=>{
        this.ligado = true
    }
    desligar=()=>{
        this.ligado = false
    }
    setCor=(cor)=>{
        this.cor = cor
    }
}

class Militar extends Carro{ //Classe Filho
    constructor(nome,portas,blindagem,munição){
        super(nome,portas)
        this.blindagem = blindagem
        this.munição = munição
        this.setCor('verde')
    }
    atirar=()=>{
        if(this.munição > 0){
            this.munição--
        }
    }
}

class Utilitário extends Carro{
    constructor(nome,portas,lugares){
        super(nome,portas)
        this.lugares = lugares
    }
}

const c1 = new Carro('Normal',4)
c1.ligar()
c1.setCor('Preto')

const c2 = new Militar('Lutador',2,100,50)
// c2.setCor('Azul')

c2.atirar()
c2.atirar()
c2.atirar()
c2.atirar()
c2.atirar()

console.log(`Nome: ${c1.nome}`)
console.log(`Portas: ${c1.portas}`)
console.log(`Ligado: ${(c1.ligado?'Sim':'Não')}`)
console.log(`Velocidade: ${c1.vel}`)
console.log(`Cor: ${c1.cor}`)
console.log('-----------------------------')

console.log(`Nome: ${c2.nome}`)
console.log(`Portas: ${c2.portas}`)
console.log(`Ligado: ${(c2.ligado?'Sim':'Não')}`)
console.log(`Velocidade: ${c2.vel}`)
console.log(`Blindagem: ${c2.blindagem}`)
console.log(`Munição: ${c2.munição}`)
console.log(`Cor: ${c2.cor}`)
console.log('-----------------------------')