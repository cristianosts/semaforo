const img = document.getElementById('img')
const buttons = document.getElementById('buttons')
const trafficLight = (event) => {
   stopAuto()
   turnOn[event.target.id]()
}
let colorindex = 0
let intervalID = null
/* ternário: opção para deixar o código mais curto (booleans) 
const nextIndex = () => colorindex = colorindex < 2 ? ++colorindex : 0;*/
const nextIndex = () => {
    if (colorindex < 2) {
        colorindex++
    } else {
        colorindex = 0
    }
}
const changecolor = () => {
    const colors = ['red','yellow','green']
    const color = colors[colorindex]
    turnOn[color]()
    nextIndex()
}

const turnOn = {
    'red':      () => img.src = 'img/vermelho.png',
    'yellow':   () => img.src = 'img/amarelo.png',
    'green' :   () => img.src = 'img/verde.png',
    'automatic':() => intervalID = setInterval(changecolor, 1000)
}

const stopAuto = () => {
    clearInterval (intervalID)
}

buttons.addEventListener('click', trafficLight)