const valor_padrao = 0

let valor = 0

console.log(valor)

function add(v){
    valor += v
}

add(10)

console.log(valor)

add(5)

console.log(valor)





console.log('---------------------')



function soma(n1 = valor_padrao, n2 = valor_padrao){
    let res
    res = n1 + n2
    return n1 + n2
}

let resultado_soma = soma(5,5)
console.log(resultado_soma)