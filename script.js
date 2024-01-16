const modalTriggers = document.querySelectorAll( "[data-modal-trigger]" )
const modalClose = document.querySelectorAll( "[data-modal-close]" )
modalTriggers.forEach( ( modal ) => {
	modal.addEventListener( "click", (e) => {
		const slug = modal.dataset.modalTrigger
		const target = slug ? document.querySelector(`[data-modal-target="${slug}"]`) : null
		if ( target ) {
			target.classList.add( "is_active" )
		}
	})
})
modalClose.forEach( ( close ) => {
	close.addEventListener( "click", (e) => {
		const target = close.closest( "[data-modal-target]" )
		if ( target ) {
			target.classList.remove( "is_active" )
		}
	})
})

document.addEventListener('DOMContentLoaded', function () {
    var currentIndex = 0;
    var sliderItems = document.querySelectorAll('.slider-item');
    var totalSlides = sliderItems.length;

    function showSlide(index) {
        sliderItems.forEach(function (item) {
            item.style.display = 'none';
        });
        sliderItems[index].style.display = 'block';
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
    }

    function previousSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
    }

    var previousButton = document.querySelector('.type_previous');
    var nextButton = document.querySelector('.type_next');

    previousButton.addEventListener('click', previousSlide);
    nextButton.addEventListener('click', nextSlide);


    showSlide(currentIndex);
});