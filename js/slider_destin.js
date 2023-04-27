const sliderCarouselDestin = document.querySelector('.contentGalerySliderDestin'),
firstFigure = sliderCarouselDestin.querySelectorAll('.contentGalerySliderDestin figure')[0];
const arrowButtons = document.querySelectorAll('.buttonsSliderDestin button');


let isCursorStartDestin = false, prevPageXDestin, prevScrollLeftDestin;
firstFigureWidth = firstFigure.clientWidth + 32;

arrowButtons.forEach(iconDestin => {
  iconDestin.addEventListener('click', () => {
    sliderCarouselDestin.scrollLeft += iconDestin.id == 'left' ? - firstFigureWidth : firstFigureWidth;
  })
})

const cursorStartDestin = (moviment) => {
  sliderCarouselDestin.classList.add('cursorOnn');
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
  sliderCarouselDestin.classList.remove('cursorOnn');
  isCursorStartDestin = false;
}

sliderCarouselDestin.addEventListener('mousedown', cursorStartDestin);
sliderCarouselDestin.addEventListener('mousemove', cursorOnnDestin);
sliderCarouselDestin.addEventListener('mouseup', cursorEndDestin);