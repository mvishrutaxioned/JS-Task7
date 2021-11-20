var dots = document.querySelectorAll('.slider-dots li a');
var imageList = document.querySelectorAll('.slider li');
var prevBtn = document.querySelector('.prev');
var nextBtn = document.querySelector('.next');

let current = 0;

function nextPicture(e) {
  e.preventDefault();
  const slideLength = imageList.length;
  if (current < slideLength - 1) {
    goTo(1);
  }
}

function prevPicture(e) {
  e.preventDefault();
  if (current > 0) {
    goTo(-1);
  }
}

function goTo(n) {
  imageList.forEach((image) => {
    if (image.classList.contains('active')) {
      image.classList.remove('active');
    }
  });
  imageList[current + n].classList.add('active');
  current += n;
}

function changePicture(e, dot) {
  e.preventDefault();

  dots.forEach((dot) => dot.classList.remove('active'));
  dot.classList.add('active');

  imageList.forEach((image) => {
    if (dot.dataset.tab == image.id) {
      imageList.forEach((image) => image.classList.remove('active'));
      image.classList.add('active');
    }
  });
}

nextBtn.addEventListener('click', nextPicture);
prevBtn.addEventListener('click', prevPicture);

dots.forEach((dot) => {
  dot.addEventListener('click', (e) => changePicture(e, dot));
});