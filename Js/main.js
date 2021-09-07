$(document).ready(function(){
  var pos = []; //각 섹션이 top에서부터 얼마나 떨어져 있나를 알아내기 위한 변수설정(배열)
  
  for(var i=1 ; i < 7 ; i++){
    pos.push(($('#section'+i).offset().top) - 165);
  };
  console.log(pos);



  $('.open_gnb').click(function(){
    $(this).toggleClass('open');
    $('.m_gnb_dimmed').fadeToggle(500);
    $('.gnb_area').slideToggle(500,'swing');
  });
  
  //모바일 상태에서 메뉴슬라이드가 작동 된 뒤 남아있는 Style속성을 없애준다
  $(window).resize(function(){
    var winW = $(window).width();
    if(winW > 1024) {
      $('.gnb_area, .m_gnb_dimmed').removeAttr('style');
      $('.open_gnb').removeClass('open');
    }
  });

 var targ, sectionH;
//인디게이터를 누르면 각 페이지(section)으로 이동한다.
$('.indicator li a').on('click',function(e){
  e.preventDefault(); //a 기본기능을 못하게 한다
  targ = this.hash;   //#이 들어가있는 부분을 찾아서 변수에


  sectionH = ($(targ).offset().top) - 159; 
  //각 swciton의 제일 위에서 부터의 거리에서 고정헤더 길이 159px만큼 빼준다
  $('html,body').animate({scrollTop:sectionH},500,'swing');

});

//모바일-인디게이터를 누르면 각 페이지(section)으로 이동한다.
$('.m_indicator li a').on('click',function(e){
  e.preventDefault();
  m_targ = this.hash;

  m_sectionH = ($(m_targ).offset().top) - 85;
  $('html,body').animate({scrollTop:m_sectionH},500,'swing');

  $('.m_indicator li').removeClass('on');  //선택된 인디게이터 li에 on클라스 추가
  $(this).parent('li').addClass('on');
});

//모바일-snd_wrap,m_indicator가 스크롤시 헤더에 고정
$(window).scroll(function(){
  var scroll = $(window).scrollTop();//스크롤 된 거리

  if ( scroll >= 60) {
    $('.snb_wrap, .m_indicator').addClass('stick');
  } else {
    $('.snb_wrap, .m_indicator').removeClass('stick');
  };

//스그롤시 인디게이터 색상 변환
if(scroll < pos[1]) {
  $('.indicator li').removeClass('on');
  $('.indicator li').eq(0).addClass('on');
  $('a.indicator_prev').css("display","none");
} 
else if (scroll >= pos[1] && scroll < pos[2]){
  $('.indicator li').removeClass('on');
  $('.indicator li').eq(1).addClass('on');
  $('a.indicator_prev').css("display","block");
} 
else if (scroll >= pos[2] && scroll < pos[3]){
  $('.indicator li').removeClass('on');
  $('.indicator li').eq(2).addClass('on');
} 
else if (scroll >= pos[3] && scroll < pos[4]){
  $('.indicator li').removeClass('on');
  $('.indicator li').eq(3).addClass('on');
  $('.buy_car img').removeClass('ani');
} 
else if (scroll >= pos[4] && scroll < pos[5]){
  $('.indicator li').removeClass('on');
  $('.indicator li').eq(4).addClass('on');
  $('a.indicator_next').css("display","block");
}
 else {
  $('.indicator li').removeClass('on');
  $('.indicator li').eq(6).addClass('on');
  $('.buy_car img').addClass('ani');
  $('a.indicator_next').css("display","none");
}







});


//화면 제일 위로 올라가게 하는 topBtn버튼
$('.topBtn, a.indicator_prev').on('click',function(){
  $('html,body').animate({scrollTop:0},200,'swing');
});

//next버튼 제일 아래로
$('a.indicator_next').on('click',function(){
  $('html,body').animate({scrollTop:7000},200,'swing');
});




});