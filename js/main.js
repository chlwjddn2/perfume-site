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
})


