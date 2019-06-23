$(function(){
    
})

$(document).ready(function() {
    $('#metodologia').load('src/pages/metodologia.html')
    let last_known_scroll_position = 0;
    let ticking = false;
    
    function doSomething(scroll_pos) {
        console.log(scroll_pos)
        if(scroll_pos > 10 ) {
            $('#navheader').removeClass('navheader-color')
        }else{
            $('#navheader').addClass('navheader-color')

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