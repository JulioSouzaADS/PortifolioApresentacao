const slides = document.querySelectorAll('.slide');
const carousel = document.querySelector('.carousel');
const nextBtn = document.querySelector('.carousel-button-next');
const prevBtn = document.querySelector('.carousel-button-prev');
const intervalTime = 5000;
let slideInterval;

// Função para alternar slides automaticamente
const startSlide = () => {
  slideInterval = setInterval(() => {
    const currentSlide = document.querySelector('.active-slide');
    const nextSlide = currentSlide.nextElementSibling || slides[0];
    currentSlide.classList.remove('active-slide');
    nextSlide.classList.add('active-slide');
    setTimeout(() => currentSlide.classList.add('slide-transition'), 0);
    setTimeout(() => nextSlide.classList.add('slide-transition'), 0);
    setTimeout(() => {
      currentSlide.classList.remove('slide-transition', 'slide-active', 'slide-prev', 'slide-next');
      nextSlide.classList.remove('slide-transition', 'slide-prev', 'slide-next');
      nextSlide.classList.add('slide-active');
    }, 500);
    const currentImg = document.querySelector('.active-img');
    const nextImg = currentImg.nextElementSibling || carousel.firstElementChild;
    currentImg.classList.remove('active-img');
    nextImg.classList.add('active-img');
  }, intervalTime);
}

// Função para avançar ou voltar slide manualmente
const slideClick = (e) => {
  clearInterval(slideInterval);
  const currentSlide = document.querySelector('.active-slide');
  let nextSlide;
  if (e.target.classList.contains('carousel-button-next')) {
    nextSlide = currentSlide.nextElementSibling || slides[0];
    currentSlide.classList.add('slide-prev');
    nextSlide.classList.add('slide-active', 'slide-next');
  } else if (e.target.classList.contains('carousel-button-prev')) {
    nextSlide = currentSlide.previousElementSibling || slides[slides.length - 1];
    currentSlide.classList.add('slide-next');
    nextSlide.classList.add('slide-active', 'slide-prev');
  }
  setTimeout(() => currentSlide.classList.add('slide-transition'), 0);
  setTimeout(() => nextSlide.classList.add('slide-transition'), 0);
  setTimeout(() => {
    currentSlide.classList.remove('slide-transition', 'slide-active', 'slide-prev', 'slide-next');
    nextSlide.classList.remove('slide-transition', 'slide-prev', 'slide-next');
    nextSlide.classList.add('slide-active');
  }, 500);
  const currentImg = document.querySelector('.active-img');
  const nextImg = currentImg.nextElementSibling || carousel.firstElementChild;
  currentImg.classList.remove('active-img');
  nextImg.classList.add('active-img');
  startSlide();
}

// Event listeners para os botões de avançar e voltar
nextBtn.addEventListener('click', slideClick);
prevBtn.addEventListener('click', slideClick);

// Iniciar a troca automática de slides
startSlide();

$(document).ready(function(){
    $('.carousel').slick({
      dots: true,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: true,
      prevArrow: $('.carousel-button-prev'),
      nextArrow: $('.carousel-button-next')
    });
  });
  