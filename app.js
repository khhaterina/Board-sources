const board = document.querySelector('#board')
const colors = ['#FCF3CF', '#F4D03F', '#F5B041', '#EB984E', 'DC7633', 'BA4A00']
const SQUARES_NUMBER = 260

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => 
        setColor(square))

    square.addEventListener('mouseleave', () => 
        removetColor(square))

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removetColor(element) {
    element.style.backgroundColor = '#1d1d1d' 
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}