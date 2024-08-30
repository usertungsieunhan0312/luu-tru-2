//slider
const sliderItem = document.querySelectorAll('.image-slider')
for (let index = 0; index < sliderItem.length; index++) {
  sliderItem[index].style.left = index * 100 + "%"
  
}

const sliderItems = document.querySelector('.image-sliders')
const arrowRight = document.querySelector('.next')
const arrowLeft = document.querySelector('.prev')
let i = 0

arrowRight.addEventListener('click', () => {
  if (i < sliderItem.length-1) {
    i++
    sliderMove(i)
  }
  else {
    i = 0
    sliderMove(i)
  }
})
  
arrowLeft.addEventListener('click', () => {
  if (i > 0) {
    i--
    sliderMove(i)
  }
  else {
    i = sliderItem.length - 1
    sliderMove(i)
  }
})

function autoSlider() {
  if (i < sliderItem.length-1)
  {
    i++
  }
  else {
    i = 0
  }
  sliderMove(i)
}

function sliderMove(i) {
  sliderItems.style.left = -i*100+"%"
}

setInterval(autoSlider,5000)