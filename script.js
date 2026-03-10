document.addEventListener('DOMContentLoaded', () => {
    const carouselInner = document.querySelector('.carousel-inner');
    const images = carouselInner.querySelectorAll('img');
    let index = 0;
    const intervalTime = 3000; // 3秒切换

    function nextSlide() {
        index++;
        if (index >= images.length) {
            index = 0;
        }
        const offset = -index * 100;
        carouselInner.style.transform = `translateX(${offset}%)`;
    }

    setInterval(nextSlide, intervalTime);
});