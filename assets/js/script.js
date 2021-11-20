var dots = document.querySelectorAll('.slider-dots li a');
var imageList = document.querySelectorAll('.slider li');
var prevBtn = document.querySelector('.prev');
var nextBtn = document.querySelector('.next');


function nextPicture(e) {
    e.preventDefault();

    imageList.forEach((image, index) => {
        if(image.classList.contains('active')) {
            if(imageList[index+1]) {
                imageList[index+1].classList.add('active')
                image.classList.remove('active')
            }
        }
    })
}

function changePicture(e, dot) {
    e.preventDefault();

    dots.forEach(dot => dot.classList.remove('active'));
    dot.classList.add('active');

    imageList.forEach(image => {
        if(dot.dataset.tab == image.id) {
            imageList.forEach(image => image.classList.remove('active'));
            image.classList.add('active')
        }
    })
}

nextBtn.addEventListener('click', e => nextPicture(e));
dots.forEach(dot => {
    dot.addEventListener('click', e => changePicture(e, dot))
})
