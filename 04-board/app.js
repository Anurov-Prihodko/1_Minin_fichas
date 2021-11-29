const board = document.querySelector('#board')
const colors = []

while (colors.length < 100) {
  do {
    var color = Math.floor(Math.random() * 1000000 + 1)
  } while (colors.indexOf(color) >= 0)
  colors.push('#' + ('000000' + color.toString(16)).slice(-6))
}

const SQUARES_NUMBER = 840

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', setColor)

  square.addEventListener('mouseleave', removeColor)

  board.append(square)
}

function setColor(event) {
  const el = event.target
  const color = getRandomColor()
  el.style.backgroundColor = color
  el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(event) {
  const el = event.target
  el.style.backgroundColor = '#1d1d1d'
  el.style.boxShadow = '0 0 2px #000'
}

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)]
}
