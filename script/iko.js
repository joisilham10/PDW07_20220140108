// Custom JavaScript for Car Enthusiast website

$(document).ready(function(){
    $('.carousel').carousel({
        interval: 5000 // Set autoplay interval in milliseconds (5 seconds)
    });
});

function showNextCards() {
    document.querySelector('.carousel-item.active').classList.remove('active');
    document.querySelectorAll('.carousel-item')[1].classList.add('active');
}

function showPreviousCards() {
    document.querySelector('.carousel-item.active').classList.remove('active');
    document.querySelectorAll('.carousel-item')[0].classList.add('active');
}