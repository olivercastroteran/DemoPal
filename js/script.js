const menu = document.getElementById('menu');
const phoneNav = document.getElementById('phone-nav');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const carouselContainer = document.getElementById('carousel-container');
const carouselCards = document.querySelectorAll('.carousel__card');
const squares = document.querySelectorAll('.square');

let counter = 0;

// Phone Navigation sidebar
menu.addEventListener('click', () => {
  menu.classList.toggle('open');
  phoneNav.classList.toggle('open');
});

// Carousel functionality
const carouselMotion = () => {
  [...carouselCards].forEach((card) => {
    card.style.transform = `translateX(-${counter * 110}%)`;
  });

  [...squares].forEach((square) => {
    if (+square.getAttribute('data-selected') === counter + 1) {
      square.classList.add('selected');
    } else if (+square.getAttribute('data-selected') !== counter + 1) {
      square.classList.remove('selected');
    }
  });
};

prevBtn.addEventListener('click', () => {
  if (counter < 1) counter = 1;
  counter -= 1;

  carouselMotion();
});

nextBtn.addEventListener('click', () => {
  counter += 1;
  carouselMotion();

  if (counter === 6) counter = 0;
  carouselMotion();
});

// setInterval(() => {
//   counter += 1;
//   carouselMotion();
//   if (counter === 6) counter = 0;
//   carouselMotion();
// }, 5000);

let carouselAutomation = setInterval(automation, 3000);

function automation() {
  counter += 1;
  carouselMotion();
  if (counter === 6) counter = 0;
  carouselMotion();
}

function stopAutomation() {
  // console.log('stop');
  clearInterval(carouselAutomation);
}

carouselContainer.addEventListener('mouseenter', () => {
  // console.log('enter');
  stopAutomation();
});

carouselContainer.addEventListener('mouseleave', () => {
  // console.log('out');
  carouselAutomation = setInterval(automation, 3000);
});
