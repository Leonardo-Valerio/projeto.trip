let botoes = document.getElementById('continentes')
let botaoStart = document.getElementById('comecar')
let spaceStart = document.getElementById('start')
function clicar(){
    botoes.style.display = 'flex'
    botaoStart.style.display = 'none'
    spaceStart.innerHTML='Comece escolhendo um dos continentes que tem vontade de conhecer pelo mundo!'
    spaceStart.style.backgroundColor = 'rgba(0, 0, 0, 0.716)'
}