const ctx = document.getElementById('grafico');

let labelsX = ['Disponibilidade','Qualidade','Performace']
let valores = [Math.round(Math.random()*100),Math.round(Math.random()*100),Math.round(Math.random()*100)]

let grafico = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: labelsX,
    datasets: [{
      label: '# of Votes',
      data: valores,
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

let intervalo = setInterval(()=>{
    window.location.reload()
},5000)


//COM A P.I
// const obterDados = ()=>{
//     const endpoint = 'aqui será posta a P.I'
//     fetch(endpoint)
//     .then(res=>res.json())
//     .then(res=>{
//         valores[0] = res.disponibilidade
//         valores[1] = res.qualidade
//         valores[2] = res.performace
//         grafico.update()
//     })
//     .catch(erro=>{
//         console.log('ERRO: ' + erro)
//     })
// }

// let intervalo = setInterval(obterDados,3000)
