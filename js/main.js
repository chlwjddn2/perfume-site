const header = document.querySelector('#header');
const gnb = document.querySelector('.gnb');

gnb.addEventListener('mouseover',()=>{
    header.classList.add('up');
})

gnb.addEventListener('mouseout',()=>{
    header.classList.remove('up');
})
gnb.addEventListener('click',()=>{
    console.log('dd');
})

var $header = $('header');
$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 500){
            $header.addClass('sticky')
            $('.gotop').addClass('show');
        }else{
            $header.removeClass('sticky');
            $('.gotop').removeClass('show');
        }
    
    });
    $('.top').click(function(){
        $('html').animate({scrollTop : 0}, 400);
    });
    $('.toggle-menu').click(function(){
      $('.hide_menu').addClass('show');
    })
    $('.close_btn').click(function(){
      $('.hide_menu').removeClass('show');
    })
    var swiper = new Swiper(".first", {
        spaceBetween: 0,
        centeredSlides: true,
        loop: true,
        autoplay: {
          delay: 4500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        effect: "fade",
      });
      var swiper = new Swiper(".second", {
          slidesPerView: 1,
          spaceBetween: 20,
          loop: true,
  
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          },
        });
});


