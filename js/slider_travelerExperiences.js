const sliderCarouselComentsClients = document.querySelector('.containerComentsClients'),
firstFigureComentsClients = sliderCarouselComentsClients.querySelectorAll('.containerComentsClients>div')[0];
const arrowButtonsComentsClients = document.querySelectorAll('.buttonsSliderTravelerExperiences button');


let isCursorStartComentsClients = false, prevPageXComentsClients, prevScrollLeftComentsClients;
firstFigureWidthComentsClients = firstFigureComentsClients.clientWidth + 32;

arrowButtonsComentsClients.forEach(iconComentsClients => {
  iconComentsClients.addEventListener('click', () => {
    sliderCarouselComentsClients.scrollLeft += iconComentsClients.id == 'left' ? - firstFigureWidthComentsClients : firstFigureWidthComentsClients;
  })
})

const cursorStartComentsClients = (moviment) => {
  sliderCarouselComentsClients.classList.add('cursorOnnComentsClients');
  isCursorStartComentsClients = true;
  prevPageXComentsClients = moviment.pageX;
  prevScrollLeftComentsClients = sliderCarouselComentsClients.scrollLeft;
}

const cursorOnnComentsClients = (moviment) => {
  if(!isCursorStartComentsClients) return;
  moviment.preventDefault();
  let positionComentsClients = moviment.pageX - prevPageXComentsClients;
  sliderCarouselComentsClients.scrollLeft = prevScrollLeftComentsClients - positionComentsClients;
}

const cursorEndComentsClients = () => {
  sliderCarouselComentsClients.classList.remove('cursorOnnComentsClients');
  isCursorStartComentsClients = false;
}

sliderCarouselComentsClients.addEventListener('mousedown', cursorStartComentsClients);
sliderCarouselComentsClients.addEventListener('mousemove', cursorOnnComentsClients);
sliderCarouselComentsClients.addEventListener('mouseup', cursorEndComentsClients);