const sliderCarouselTrip = document.querySelector('.contentGaleryTripPlanners')


let isCursorStartTrip = false, prevPageXTrip, prevScrollLeftTrip;

const cursorStartTrip = (moviment) => {
  isCursorStartTrip = true;
  prevPageXTrip = moviment.pageX;
  prevScrollLeftTrip = sliderCarouselTrip.scrollLeft;
}

const cursorOnnTrip = (moviment) => {
  if(!isCursorStartTrip) return;
  moviment.preventDefault();
  let positionTrip = moviment.pageX - prevPageXTrip;
  sliderCarouselTrip.scrollLeft = prevScrollLeftTrip - positionTrip;
}

const cursorEndTrip = () => {
  isCursorStartTrip = false;
}

sliderCarouselTrip.addEventListener('mousedown', cursorStartTrip);
sliderCarouselTrip.addEventListener('mousemove', cursorOnnTrip);
sliderCarouselTrip.addEventListener('mouseup', cursorEndTrip);