window.onload = function(){
         
  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal', 
    loop: true, // 循环模式选项
    autoplay: true,
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    
  })   

  document.getElementById("downloadbtn").addEventListener("click",function() {
    document.getElementById("downloadbtn").innerHTML = "下个屁"
  })
}