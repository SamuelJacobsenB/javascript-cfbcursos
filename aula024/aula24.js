//Função construtor Anônima
const f1 = new Function("v1","v2","return v1 + v2")

console.log(f1(10,5))

console.log('-------------------')

//Funcão Anônima
const f2 = function(...valores){
    let res = 0
    for(let v of valores){
        res += v
    }
    return res
}

console.log(f2(10,5))
