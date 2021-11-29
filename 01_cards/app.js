function slidePlugin(activeSlideNum = 0) {
  const sliders = document.querySelectorAll('.slide')

  sliders[activeSlideNum].classList.add('active')

  for (const slide of sliders) {
    slide.addEventListener('click', () => {
      removeActiveClass()
      slide.classList.add('active')
    })
  }

  function removeActiveClass() {
    sliders.forEach((slide) => {
      slide.classList.remove('active')
    })
  }
}

slidePlugin()
