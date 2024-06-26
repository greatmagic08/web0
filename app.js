var nextBtn = document.querySelector('.next'),
    prevBtn = document.querySelector('.prev'),
    carousel = document.querySelector('.carousel'),
    list = document.querySelector('.list'), 
    items = document.querySelectorAll('.item'), // Cambié item a items para reflejar plural
    runningTime = document.querySelector('.carousel .timeRunning');

let timeRunning = 3000; 
let timeAutoNext = 7000;

nextBtn.onclick = function() {
    showSlider('next');
};

prevBtn.onclick = function() {
    showSlider('prev');
};

let runTimeOut;

let runNextAuto = setTimeout(() => {
    nextBtn.click();
}, timeAutoNext);

function resetTimeAnimation() {
    runningTime.style.animation = 'none';
    void runningTime.offsetWidth; // trigger reflow
    runningTime.style.animation = null; 
    runningTime.style.animation = 'runningTime 7s linear 1 forwards';
}

function showSlider(type) {
    let sliderItems = list.querySelectorAll('.item');
    let currentTransition = 'left 1s ease'; // Definir la transición actual

    if (type === 'next') {
        list.appendChild(sliderItems[0]);
        carousel.classList.add('next');
    } else {
        list.prepend(sliderItems[sliderItems.length - 1]);
        carousel.classList.add('prev');
    }

    clearTimeout(runTimeOut);

    runTimeOut = setTimeout(() => {
        carousel.classList.remove('next');
        carousel.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        nextBtn.click();
    }, timeAutoNext);

    resetTimeAnimation(); // Asegurar que la animación de tiempo se reinicie
}


// Start the initial animation 
resetTimeAnimation();
