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
    sliderItems.style.left = -i*100+"%"
  }
  else {
    i = 0
    sliderItems.style.left = -i*100+"%"
  }
})

arrowLeft.addEventListener('click', () => {
  if (i > 0) {
    i--
    sliderItems.style.left = -i*100 +"%"
  }
  else {
    i = sliderItem.length - 1;
    sliderItems.style.left = -i*100+"%"
  }
})
