const $ = selector => document.querySelector(selector)

const canvas = $('#game')

const ctx = canvas.getContext('2d')

const bunequinho = new Image()
bunequinho.src = '/img/bunequinho.png'

const drawBunequinho = () => {
  // ctx.drawImage(bunequinho, bunequinhoPosition.x, bunequinhoPosition.y, bunequinho.width, bunequinho.height, 0, 0, bunequinho.width, bunequinho.height)
  ctx.drawImage(bunequinho, bunequinhoPosition.x, bunequinhoPosition.y)
}

const bunequinhoPosition = {
  x: 0,
  y: 0
}

const cleanCanvas = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = '#eee'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
}

const setCanvasSize = () => {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
}

const gameLoop = () => {
  setCanvasSize()
  cleanCanvas()
  drawBunequinho()
  window.requestAnimationFrame(gameLoop)
}

document.addEventListener('keypress', e => {
  if (e.key === 'a') {
    bunequinhoPosition.x -= 10
  }
  if (e.key === 'd') {
    bunequinhoPosition.x += 10
  }
  if (e.key === 'w') {
    bunequinhoPosition.y -= 10
  }
  if (e.key === 's') {
    bunequinhoPosition.y += 10
  }
})

gameLoop()
