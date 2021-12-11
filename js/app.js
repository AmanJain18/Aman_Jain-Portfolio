$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#topBtn').fadeIn(1000);
        } else {
            $('#topBtn').fadeOut(600);
        }
    });

    $('.slider').slick({
        arrows: false,
        dots: true,
        appendDots: '.slider-dots',
        dotClass: 'slick-dots',
        autoplay: true
    });

    $('#ripples').ripples({
        resolution: 512,
        dropRadius: 15,
    });

    const bars = document.querySelectorAll('.progress__bar');

    bars.forEach(function(bar) {
        let percentage = bar.dataset.percent;
        let tooltip = bar.children[0];
        tooltip.innerText = percentage + '%';
        bar.style.width = percentage + '%';
    });

    let hamburger = document.querySelector('.hamburger');
    let times = document.querySelector('.times');
    let mobilenav = document.querySelector('.mobile-nav');
    let home = document.querySelector('.home-h');
    let about = document.querySelector('.about-h');
    let services = document.querySelector('.services-h');
    let skills = document.querySelector('.skills-h');
    let works = document.querySelector('.works-h');
    let contact = document.querySelector('.contact-h');

    hamburger.addEventListener('click', function() {
        mobilenav.classList.add('open');
    });
    times.addEventListener('click', function() {
        mobilenav.classList.remove('open');
    });
    home.addEventListener('click', function() {
        mobilenav.classList.remove('open');
    });
    about.addEventListener('click', function() {
        mobilenav.classList.remove('open');
    });
    services.addEventListener('click', function() {
        mobilenav.classList.remove('open');
    });
    skills.addEventListener('click', function() {
        mobilenav.classList.remove('open');
    });
    works.addEventListener('click', function() {
        mobilenav.classList.remove('open');
    });
    contact.addEventListener('click', function() {
        mobilenav.classList.remove('open');
    });
});


const elements = document.getElementsByClassName('jump');

for (let i = 0; i <= elements.length; i++) {
    elements[i].addEventListener('animationend', function(e) {
            elements[i].classList.remove('animated');
        }

    );
    elements[i].addEventListener('mouseover', function(e) {
            elements[i].classList.add('animated');
        }

    )
}