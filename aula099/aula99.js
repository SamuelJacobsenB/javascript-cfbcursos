class Jogador{
    constructor(nome){
        this.nome = nome
        this.id = Symbol()
    }
}

let jogadores = [new Jogador('j1'),new Jogador('j2'),new Jogador('j3'),new Jogador('j4')]