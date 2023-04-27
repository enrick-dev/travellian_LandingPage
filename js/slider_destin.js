const sliderCarouselDestin = document.querySelector('.contentGalerySliderDestin'),
firstFigureDestin = sliderCarouselDestin.querySelectorAll('.contentGalerySliderDestin figure')[0];
const arrowButtonsDestin = document.querySelectorAll('.buttonsSliderDestin button');


let isCursorStartDestin = false, prevPageXDestin, prevScrollLeftDestin;
firstFigureWidthDestin = firstFigureDestin.clientWidth + 32;

arrowButtonsDestin.forEach(iconDestin => {
  iconDestin.addEventListener('click', () => {
    sliderCarouselDestin.scrollLeft += iconDestin.id == 'left' ? - firstFigureWidthDestin : firstFigureWidthDestin;
  })
})

const cursorStartDestin = (moviment) => {
  sliderCarouselDestin.classList.add('cursorOnnDestin');
  isCursorStartDestin = true;
  prevPageXDestin = moviment.pageX;
  prevScrollLeftDestin = sliderCarouselDestin.scrollLeft;
}

const cursorOnnDestin = (moviment) => {
  if(!isCursorStartDestin) return;
  moviment.preventDefault();
  let positionDestin = moviment.pageX - prevPageXDestin;
  sliderCarouselDestin.scrollLeft = prevScrollLeftDestin - positionDestin;
}

const cursorEndDestin = () => {
  sliderCarouselDestin.classList.remove('cursorOnnDestin');
  isCursorStartDestin = false;
}

sliderCarouselDestin.addEventListener('mousedown', cursorStartDestin);
sliderCarouselDestin.addEventListener('mousemove', cursorOnnDestin);
sliderCarouselDestin.addEventListener('mouseup', cursorEndDestin);