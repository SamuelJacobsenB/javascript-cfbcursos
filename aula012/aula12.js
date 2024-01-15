const objs1 = document.getElementsByTagName("div")
const objs2 = [...document.getElementsByTagName("div")]

objs2.forEach(element =>{
    element.innerHTML = "curso"
})

console.log(objs1) //só funciona no broswer
console.log(objs2) //só funciona no broswer



/*  Exemplo Soma:
const soma = (v1,v2,v3)=>{
    return v1 + v2 + v3
}

let valores = [1,5,4]

console.log(soma(...valores))
  
---------------------------------------------------------

 Exemplo do Jogador:
const jogador1 = {nome: 'Bruno', energia:100, vidas:3, magia:150}
const jogador2 = {nome: 'Bruce', energia:100, vidas:5, velocidade:80}
const jogador3 = {...jogador1,...jogador2}

console.log(jogador3)
*/
