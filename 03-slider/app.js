const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const container = document.querySelector('.container')
const mainSlide = document.querySelector('.main-slide')

const slideCount = mainSlide.querySelectorAll('div').length

sidebar.style.top = `-${(slideCount - 1) * 100}vh`

let activeSlideIndex = 0

upBtn.addEventListener('click', () => {
  changeSlide('up')
})

downBtn.addEventListener('click', () => {
  changeSlide('down')
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowDown') {
    changeSlide('down')
  } else if (event.key === 'ArrowUp') {
    changeSlide('up')
  }
})

function changeSlide(direction) {
  if (direction === 'up') {
    activeSlideIndex += 1
    if (activeSlideIndex === slideCount) {
      activeSlideIndex = 0
    }
  } else if (direction === 'down') {
    activeSlideIndex -= 1
    if (activeSlideIndex < 0) {
      activeSlideIndex = slideCount - 1
    }
  }
  const height = container.clientHeight

  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}
