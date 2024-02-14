const retangulo = document.querySelector('#retangulo')

let mapa = new Map()

mapa.set('curso','JavaScript')
mapa.set(10,'curso de JS')
mapa.set(1,100)
mapa.set('canal',100)

mapa.delete('curso')

console.log(mapa)

let pes = 'teste'
let res = ''
if(mapa.has(pes)){
    res = 'A chave existe na coleção, valor: ' + mapa.get(pes)
    res += '<br> O tamanho da coleção é ' + mapa.size
} else {
    res = 'A chave não está na coleção'
    res += '<br> O tamanho da coleção é ' + mapa.size
}

retangulo.innerHTML = res

mapa.forEach((el)=>{
    console.log(el)
})