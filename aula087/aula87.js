const url = document.querySelector('#url')
const btn_url = document.querySelector('#btn_url')

btn_url.addEventListener('click',(evt)=>{
    // window.location = '../aula086/aula86.html'
    // window.location.replace('../aula086/aula86.html')
    // window.location.assign('../aula086/aula86.html')
    // window.location.reload()
    // window.history.back()
    // window.history.forward()
    // window.history.go(1)
    window.location = url.value
})