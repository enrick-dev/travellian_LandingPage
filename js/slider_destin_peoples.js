const sliderCarouselDestinPeoples = document.querySelector('.contentGalerySliderDestinPeoples'),
firstFigureDestinPeoples = sliderCarouselDestinPeoples.querySelectorAll('.contentGalerySliderDestinPeoples figure')[0];
const arrowButtonsDestinPeoples = document.querySelectorAll('.buttonsSliderDestinPeoples button');


let isCursorStartDestinPeoples = false, prevPageXDestinPeoples, prevScrollLeftDestinPeoples;
firstFigureWidthDestinPeoples = firstFigureDestinPeoples.clientWidth + 32;

arrowButtonsDestinPeoples.forEach(iconDestinPeoples => {
  iconDestinPeoples.addEventListener('click', () => {
    sliderCarouselDestinPeoples.scrollLeft += iconDestinPeoples.id == 'left' ? - firstFigureWidthDestinPeoples : firstFigureWidthDestinPeoples;
  })
})

const cursorStartDestinPeoples = (moviment) => {
  sliderCarouselDestinPeoples.classList.add('cursorOnnDestinPeoples');
  isCursorStartDestinPeoples = true;
  prevPageXDestinPeoples = moviment.pageX;
  prevScrollLeftDestinPeoples = sliderCarouselDestinPeoples.scrollLeft;
}

const cursorOnnDestinPeoples = (moviment) => {
  if(!isCursorStartDestinPeoples) return;
  moviment.preventDefault();
  let positionDestinPeoples = moviment.pageX - prevPageXDestinPeoples;
  sliderCarouselDestinPeoples.scrollLeft = prevScrollLeftDestinPeoples - positionDestinPeoples;
}

const cursorEndDestinPeoples = () => {
  sliderCarouselDestinPeoples.classList.remove('cursorOnnDestinPeoples');
  isCursorStartDestinPeoples = false;
}

sliderCarouselDestinPeoples.addEventListener('mousedown', cursorStartDestinPeoples);
sliderCarouselDestinPeoples.addEventListener('mousemove', cursorOnnDestinPeoples);
sliderCarouselDestinPeoples.addEventListener('mouseup', cursorEndDestinPeoples);