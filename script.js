document.addEventListener('DOMContentLoaded', function() {
  const sliderImages = document.querySelector('.slider-images');
  const prevButton = document.querySelector('.slider-prev');
  const nextButton = document.querySelector('.slider-next');
  const sliderImageWidth = 1400; // Изменено на ширину картинки в пикселях
  const sliderImageHeight = 900; // Изменено на высоту картинки в пикселях

  let currentIndex = 0;

  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSliderPosition();
    }
  });

  nextButton.addEventListener('click', () => {
    if (currentIndex < sliderImages.children.length - 1) {
      currentIndex++;
      updateSliderPosition();
    }
  });

  function updateSliderPosition() {
    const translateValue = -(currentIndex * sliderImageWidth);
    sliderImages.style.transform = `translateX(${translateValue}px)`;
  }

  // Обновление размеров слайдера при изменении размера окна
  window.addEventListener('resize', () => {
    sliderImageWidth = 1400; // Измените значение ширины картинки, если оно должно изменяться при изменении размера окна
    updateSliderPosition();
  });
});
