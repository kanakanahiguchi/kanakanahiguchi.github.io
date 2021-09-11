$(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        }
    });
});

$(window).on('load resize',function(){
  //ウィンドウの高さを取得する
  var targetY = $(window).height();

  //スクロールをクリックするとウィンドウの高さ分、下にスクロールする
  $('.js-scroll a').on('click',function(){
    $("html, body").stop().animate({scrollTop: targetY}, 500, 'swing');
    return false;
  });
});

$(window).on('scroll', function () {

 if ( $("#home").height() < $(this).scrollTop()) {
$('.hamburger').addClass('change-color'); }
 else if ( $("#header-about").height() < $(this).scrollTop()){
$('.hamburger').addClass('change-color'); }
 else {
 $('.hamburger').removeClass('change-color'); } });
