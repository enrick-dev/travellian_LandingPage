const sliderCarousel = document.querySelector('.contentGaleryTripPlanners')


let isCursorStart = false, prevPageX, prevScrollLeft;

const cursorStart = (moviment) => {
  isCursorStart = true;
  prevPageX = moviment.pageX;
  prevScrollLeft = sliderCarousel.scrollLeft;
}

const cursorOnn = (moviment) => {
  if(!isCursorStart) return;
  moviment.preventDefault();
  let position = moviment.pageX - prevPageX;
  sliderCarousel.scrollLeft = prevScrollLeft - position;
}

const cursorEnd = () => {
  isCursorStart = false;
}

sliderCarousel.addEventListener('mousedown', cursorStart);
sliderCarousel.addEventListener('mousemove', cursorOnn);
sliderCarousel.addEventListener('mouseup', cursorEnd);