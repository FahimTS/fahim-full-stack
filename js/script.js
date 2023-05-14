setInterval (function(){

    if(document.getElementsByClassName('slider_img')[0].classList.contains('active')){

        document.getElementsByClassName('slider_img')[1].classList.add('active');
        document.getElementsByClassName('slider_img')[0].classList.remove('active');

    }else if(document.getElementsByClassName('slider_img')[1].classList.contains('active')){

        document.getElementsByClassName('slider_img')[0].classList.add('active');
        document.getElementsByClassName('slider_img')[1].classList.remove('active');

    }
}, 5000);

const types = new Typed('.typed-animate', {
    strings: ['Fahim Hossen', 'Web Developer', 'Grapich Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true
})

