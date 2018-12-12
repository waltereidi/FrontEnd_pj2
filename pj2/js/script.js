$(window).on('load' ,function(){
  $("#header").load("header.html"); 
  $("#footer").load("footer.html"); 
});

$('.fotoMain').slick({
  prevArrow: '<i class="fas fa-angle-left prevArrow slideArrow"></i>',
  nextArrow: '<i class="fas fa-angle-right nextArrow slideArrow"></i>'
});

$('.containerImgQuad').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: '<i class="fas fa-angle-left prevArrowQuad slideArrow"></i>',
  nextArrow: '<i class="fas fa-angle-right nextArrowQuad slideArrow"></i>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 468,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


function tabChange( tabNum ){
  for( var i = 1 ; i< 4 ; i++ )
  { 
    if( i == tabNum ){
      document.getElementById("hidTab"+i).style.zIndex ="2" ;
      document.getElementById("tabLabelIcon"+i).style.display ="block" ;
      document.getElementById("tab"+i).style.color ="#ff5085" ;

  }else{
    document.getElementById("hidTab"+i).style.zIndex ="1" ;  
    document.getElementById("tabLabelIcon"+i).style.display ="none" ;
    document.getElementById("tab"+i).style.color ="#000" ;
  }

  }  
}