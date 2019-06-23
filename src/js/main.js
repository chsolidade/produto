$(function(){
    $('#metodologia').load('src/pages/tabelas/Quadro38.html')
    
})

$(document).ready(function() {
    let last_known_scroll_position = 0;
    let ticking = false;
    function doSomething(scroll_pos) {
      if(scroll_pos > 10 ) {
          
        $('#navheader').removeClass('navheader-color', 'bg-dark')
        $('#navheader').addClass('navheader-color')
      }else{
        $('#navheader').removeClass('navheader-color', 'bg-dark')
        $('#navheader').addClass('bg-dark')

      }
    }
    
    window.addEventListener('scroll', function(e) {
      last_known_scroll_position = window.scrollY;
    
      if (!ticking) {
        window.requestAnimationFrame(function() {
          doSomething(last_known_scroll_position);
          ticking = false;
        });
    
        ticking = true;
      }
    });

    
});