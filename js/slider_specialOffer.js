const sliderCarouselSpecialOffer = document.querySelector('.contentGalerySpecialOffer'),
firstFigureSpecialOffer = sliderCarouselSpecialOffer.querySelectorAll('.contentGalerySpecialOffer figure')[0];
const arrowButtonsSpecialOffer = document.querySelectorAll('.buttonsSliderSpecial button');


let isCursorStartSpecialOffer = false, prevPageXSpecialOffer, prevScrollLeftSpecialOffer;
firstFigureWidthSpecialOffer = firstFigureSpecialOffer.clientWidth + 32;

arrowButtonsSpecialOffer.forEach(iconSpecialOffer => {
  iconSpecialOffer.addEventListener('click', () => {
    sliderCarouselSpecialOffer.scrollLeft += iconSpecialOffer.id == 'left' ? - firstFigureWidthSpecialOffer : firstFigureWidthSpecialOffer;
  })
})

const cursorStartSpecialOffer = (moviment) => {
  sliderCarouselSpecialOffer.classList.add('cursorOnnSpecialOffer');
  isCursorStartSpecialOffer = true;
  prevPageXSpecialOffer = moviment.pageX;
  prevScrollLeftSpecialOffer = sliderCarouselSpecialOffer.scrollLeft;
}

const cursorOnnSpecialOffer = (moviment) => {
  if(!isCursorStartSpecialOffer) return;
  moviment.preventDefault();
  let positionSpecialOffer = moviment.pageX - prevPageXSpecialOffer;
  sliderCarouselSpecialOffer.scrollLeft = prevScrollLeftSpecialOffer - positionSpecialOffer;
}

const cursorEndSpecialOffer = () => {
  sliderCarouselSpecialOffer.classList.remove('cursorOnnSpecialOffer');
  isCursorStartSpecialOffer = false;
}

sliderCarouselSpecialOffer.addEventListener('mousedown', cursorStartSpecialOffer);
sliderCarouselSpecialOffer.addEventListener('mousemove', cursorOnnSpecialOffer);
sliderCarouselSpecialOffer.addEventListener('mouseup', cursorEndSpecialOffer);